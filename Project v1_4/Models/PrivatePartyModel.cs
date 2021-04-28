using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Project_v1_4.Models
{
    public class PrivatePartyModel
    {
        public string DescriptionName { get; set; }
        public string AddressLine { get; set; }
        public string PostCode { get; set; }
        public string City { get; set; }
        public int CountryId { get; set; }
        public int MusicStyleId { get; set; }
        public int DrinkItemId { get; set; }
        public int FoodItemId { get; set; }
        public int ToBringItemId { get; set; }
        public string DressCode { get; set; }
        public int ParticipationFee { get; set; }
        public List<UserMusicTypes> MusicTypeChoosens { get; set; }
        public List<Countries> HostedCountry { get; set; }
        public List<Drink> Drinks { get; set; }
        public List<Food> Food { get; set; }
        public List<ToBring> ToBring { get; set; }
        public string HostEmail { get; set; }

    }
}