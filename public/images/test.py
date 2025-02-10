import os

def list_files_in_directory(directory):
    file_paths = []
    
    # เดินสำรวจไฟล์ทั้งหมดใน directory และ subdirectory
    for root, _, files in os.walk(directory):
        for file in files:
            file_paths.append(os.path.join(root, file))  # สร้าง path แบบเต็ม

    return file_paths

# ตั้งค่าที่อยู่โฟลเดอร์ที่ต้องการ list ไฟล์
folder_path = "/Users/digixtwo/Documents/Project/my-portfolio/public/images"

# เรียกใช้ฟังก์ชันและแสดงผล
file_list = list_files_in_directory(folder_path)
print(file_list)  # หรือจะใช้ return ก็ได้