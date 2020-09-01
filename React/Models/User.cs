using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace React.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [MaxLength(length:50)]
        public string Name { get; set; }

        [MaxLength(length: 50)]
        public string Surname { get; set; }
    }
}
