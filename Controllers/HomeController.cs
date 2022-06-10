using Fiorello.DAL;
using Fiorello.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fiorello.Models;

namespace Fiorello.Controllers
{
    public class HomeController : Controller
    {
        private AppDbContext _context { get; }
        public HomeController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            HomeViewModel home = new HomeViewModel
          {
               Slides = _context.Slides.ToList(),
               Summary = _context.Summary.FirstOrDefault(),
               Categories = _context.Categories.Where(c => !c.IsDeleted).ToList(),
               Products = _context.Products.Where(c => !c.IsDeleted)
               .Include(p => p.Images).Include(p => p.Category).ToList(),
          };
            return View(home);
        }
    }
}