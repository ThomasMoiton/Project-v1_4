//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Project_v1_4.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Drink
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Drink()
        {
            this.PrivatePartyDrink = new HashSet<PrivatePartyDrink>();
            this.PrivatePartyDrink1 = new HashSet<PrivatePartyDrink>();
        }
    
        public int DrinkItemId { get; set; }
        public string DrinkItemName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PrivatePartyDrink> PrivatePartyDrink { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PrivatePartyDrink> PrivatePartyDrink1 { get; set; }
    }
}
