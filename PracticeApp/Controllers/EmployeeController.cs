using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PracticeApp.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
                return View();
        }

        public ActionResult List()
        {
            return View("Partial/EmployeeList");
        }

        public ActionResult Add()
        {
            return View("Partial/EmployeeAdd");
        }
    }
}