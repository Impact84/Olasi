import os
import glob
from stat import ST_MTIME
from PIL import Image

base_path = r"C:\Documentos\Antigravity\Python\Olasi\camino"
folders = ["inicios", "conociendonos", "recuerdos", "problemas", "distancia", "nosotros"]

for folder in folders:
    folder_path = os.path.join(base_path, folder)
    if not os.path.exists(folder_path):
        continue
    
    files = []
    for f in os.listdir(folder_path):
        full_path = os.path.join(folder_path, f)
        if os.path.isfile(full_path):
            files.append(full_path)
            
    # Sort files by modified time
    files.sort(key=lambda x: os.path.getmtime(x))
    
    # First pass: rename/convert to temporary names
    temp_names = []
    for i, file_path in enumerate(files):
        ext = os.path.splitext(file_path)[1].lower()
        temp_path = os.path.join(folder_path, f"temp_{i+1}.jpg")
        
        if ext in ['.png', '.jpeg']:
            # Convert to jpg properly
            try:
                img = Image.open(file_path)
                rgb_im = img.convert('RGB')
                rgb_im.save(temp_path, quality=95)
                os.remove(file_path) # remove original
            except Exception as e:
                print(f"Error converting {file_path}: {e}")
                os.rename(file_path, temp_path) # Fallback to just rename
        elif ext == '.mp4':
            # Keep mp4 extension
            temp_path = os.path.join(folder_path, f"temp_{i+1}.mp4")
            os.rename(file_path, temp_path)
        else:
            # Just rename for other formats (like native .jpg)
            os.rename(file_path, temp_path)
            
        temp_names.append(temp_path)
        
    # Second pass: rename temp_ to final
    for i, temp_path in enumerate(temp_names):
        ext = os.path.splitext(temp_path)[1].lower()
        final_path = os.path.join(folder_path, f"{i+1}{ext}")
        os.rename(temp_path, final_path)
        print(f"Processed into {i+1}{ext} in {folder}")
