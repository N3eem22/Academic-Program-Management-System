using Generic.Services.IServices.AppConfig;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace Generic.Services.Services.AppConfig
{
    public class FileUploader : IFileUploader
    {
        public string ProcessUploadedFile(IFormFile file, string pathFolder, IWebHostEnvironment hostEnvironment, string? fileName)
        {
            string path = hostEnvironment.ContentRootPath + pathFolder;
            string uniqueFileName = DateTime.UtcNow.AddHours(2).ToString("ddMMyyyyHHmmssff") + Path.GetExtension(file.FileName);

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            using (FileStream fileStream = File.Create(path + uniqueFileName))
            {
                file.CopyTo(fileStream);
                fileStream.Flush();
            }
            uniqueFileName = pathFolder + uniqueFileName;
            return uniqueFileName;
        }

        public List<string> ProcessUploadedFiles(List<IFormFile> files, string pathFolder, IWebHostEnvironment hostEnvironment)
        {

            string path = hostEnvironment.ContentRootPath + pathFolder;
            List<string> uniqueFileNames = new List<string>();

            if (!Directory.Exists(path))
                Directory.CreateDirectory(path);

            foreach (var photo in files)
            {
                var fileName = DateTime.UtcNow.AddHours(2).ToString("ddMMyyyyHHmmssff") + photo.FileName;

                using (FileStream fileStream = File.Create(path + fileName))
                {
                    photo.CopyTo(fileStream);
                    fileStream.Flush();
                }
                uniqueFileNames.Add(pathFolder + fileName);
            }

            return uniqueFileNames;
        }

        public bool DeleteFile(string Path, IWebHostEnvironment hostEnvironment)
        {
            try
            {
                var FilePath = hostEnvironment.ContentRootPath + Path;
                if (File.Exists(FilePath))
                {
                    File.Delete(FilePath);
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
