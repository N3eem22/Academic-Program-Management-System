
namespace Generic.Domian.Constants
{
    public class ApiRoutes
    {
        public const string Root = "api";


        public static class Auth
        {
            public const string Login = Root + "/Login";
        }
        public static class Department
        {
            //Departments
            public const string ListOfDepartments = Root + "/ListOfDepartments";
            public const string GetAllDepartments = Root + "/GetAllDepartments";
            public const string AddDepartment = Root + "/AddDepartment";
            public const string UpdateDepartment = Root + "/UpdateDepartment";
            public const string DeleteDepartment = Root + "/DeleteDepartment";

            //Employees
            public const string ListOfEmployees = Root + "/ListOfEmployees";
            public const string GetAllEmployees = Root + "/GetAllEmployees";
            public const string AddEmployee = Root + "/AddEmployee";
            public const string UpdateEmployee = Root + "/UpdateEmployee";
            public const string DeleteEmployee = Root + "/DeleteEmployee";
        }
        public static class Stocks
        {
            public const string ListOfCategories = Root + "/ListOfCategories";
        }

    }
}
