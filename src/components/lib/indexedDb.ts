const DB_NAME = "VideoCacheDB";
const STORE_NAME = "videos";
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 ชั่วโมง

type VideoCacheEntry = {
  id: string;
  data: ArrayBuffer;
  mimeType: string;
  timestamp: number;
};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getCachedVideo(id: string): Promise<Blob | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      const result = request.result as VideoCacheEntry | undefined;
      if (result && Date.now() - result.timestamp < CACHE_EXPIRY) {
        resolve(new Blob([result.data], { type: result.mimeType }));
      } else {
        resolve(null);
      }
    };

    request.onerror = () => reject(request.error);
  });
}

async function saveVideoToCache(id: string, blob: Blob): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onloadend = async () => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      store.put({
        id,
        data: reader.result as ArrayBuffer,
        mimeType: blob.type,
        timestamp: Date.now(),
      } as VideoCacheEntry);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    };
  });
}

export async function fetchAndCacheVideo(videoId: string, videoUrl: string): Promise<string | null> {
  const cachedBlob = await getCachedVideo(videoId);
  if (cachedBlob) {
    return URL.createObjectURL(cachedBlob);
  }
  try {
    const response = await fetch(videoUrl);
    const blob = await response.blob();
    await saveVideoToCache(videoId, blob);
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}
