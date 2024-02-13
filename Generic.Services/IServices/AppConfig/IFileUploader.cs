using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Services.IServices.AppConfig
{
    public interface IFileUploader
    {
        string ProcessUploadedFile(IFormFile file, string pathFolder, IWebHostEnvironment hostEnvironment, string? fileName);
        List<string> ProcessUploadedFiles(List<IFormFile> files, string pathFolder, IWebHostEnvironment hostEnvironment);
        bool DeleteFile(string pathFolder, IWebHostEnvironment hostEnvironment);
    }
}
