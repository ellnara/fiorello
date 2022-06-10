using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Fiorello.ViewModels.Category
{
    public class CategoryCreateViewModel
    {
        [Required(ErrorMessage = ("cannot be empty"))]
        public string Name { get; set; }
    }
}