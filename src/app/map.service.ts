import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';

import { e } from '../app/firebase/firebase.service';

export var error_s : number;

@Injectable({
  providedIn: 'root'
})

export class MapService {

  constructor() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
  }

  geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": 12,
        "title": "462 Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013",
        "properties": {
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 12
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.824228,
            18.994249
          ]
        }
      },
      {
        "type": "Feature",
        "id": 13,
        "title": "Padmabai Thakkar Rd, Kasaravadi, Dadar",
        "properties": {
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 13
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.842068,
            19.025822
          ]
        }
      },
      {
        "type": "Feature",
        "id": 14,
        "title": "Shop #4, 2nd Hasanabad Lane, Santacruz (West)Willingdon, Santacruz West, Mumbai, Maharashtra 400054, India",
        "properties": {
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 14
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.839781,
            19.079693
          ]
        }
      },
      {
        "type": "Feature",
        "title": "Metrolines office no.6, viraj apts, jari mari road, Bandra west, Mumbai 400050",
        "properties": {
          "id": 15,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.836483,
            19.055933
          ]
        }
      },
      {
        "type": "Feature",
        "title": "32 J Nehru Road, Santacruz East, Mumbai 400036. Near santacruz station.",
        "properties": {
          "id": 16,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.843915,
            19.081089
          ]
        }
      },
      {
        "type": "Feature",
        "title": "Phoenix MarketCity, Lal Bahadur Shastri Marg, Kurla West, Kurla, Kamani, Ashok Nagar, Kurla, Mumbai, Maharashtra",
        "properties": {
          "id": 17,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.888975,
            19.086636
          ]
        }
      },
      {
        "type": "Feature",
        "title": "SHREE, Plot No. 18-C, Pushtiker Society, Station Road, Nest to Mahavir Jain Hostel, Jogeswari (West), Mumbai - 400102. Opp. Harbour line Platform no.5 of Jogeshwari West",
        "properties": {
          "id": 18,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.849281,
            19.141185
          ]
        }
      },
      {
        "type": "Feature",
        "title": "Shop No. A-1, Rajesh Bldg, Royal Complex, Eksar Road, Borivali (W), Mumbai-400092",
        "properties": {
          "id": 19,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.847857,
            19.231467
          ]
        }
      },
      {
        "type": "Feature",
        "title": "B-25 Nahur and Seth Estate Panalal Compound, LBS Marg,Bhandup West, Mumbai 400078",
        "properties": {
          "id": 20,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.937114,
            19.153252
          ]
        }
      },
      {
        "type": "Feature",
        "title": "2/7 Meghal Industrial Estate, Devidayal Road, Mulund West, Mumbai, Maharashtra 400080",
        "properties": {
          "id": 21,
          "marker-color": "#03b800",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.943477,
            19.175581
          ]
        }
      },
      {
        "type": "Feature",
        "title": "Moiz Apartments, Off 11th road, T.P.S -5, Santacruz (East), Mumbai 400055",
        "properties": {
          "id": 22,
          "marker-color": "#44ff00",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.84527,
            19.0823
          ]
        }
      },
      {
        "type": "Feature",
        "title": "B/22 Gurunanak Society, Near Fire Brigade, Daulat NaGAR, Thane (E), 400603",
        "properties": {
          "id": 23,
          "marker-color": "#44ff00",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.972527,
            19.183008
          ]
        }
      },
      {
        "type": "Feature",
        "title": "Blue Tokai, Mahalaxmi, Mumbai",
        "id": 0,
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 0
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.8252175450325,
            18.989393157200194
          ]
        }
      },
      {
        "type": "Feature",
        "id": 1,
        "title": "Celestia Spaces, Sewri West, Mumbai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 1
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.84848034381866,
            18.993376274570153
          ]
        }
      },
      {
        "type": "Feature",
        "id": 2,
        "title": "Ather space, linking road, Mumbai ",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 2
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.833938,
            19.069763
          ]
        }
      },
      {
        "type": "Feature",
        "id": 3,
        "title": "Suba international, Andheri east, Mumbai ",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 3
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.860311,
            19.106241
          ]
        }
      },
      {
        "type": "Feature",
        "id": 4,
        "title": "Club Aquaria, Borivali, Mumbai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 4
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.848032,
            19.239814
          ]
        }
      },
      {
        "type": "Feature",
        "id": 5,
        "title": "Runwal Anthurium, Mulund, Mumbai ",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 5
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.94688,
            19.18061
          ]
        }
      },
      {
        "type": "Feature",
        "id": 6,
        "title": "Tata power DC fast charging station, Pirojshnagar, Vikhroli east, Mumbai",
        "properties": {
          "marker-color": "#0b00a8",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 6
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.926042,
            19.096113
          ]
        }
      },
      {
        "type": "Feature",
        "id": 7,
        "title": "AEMI (Adani Electricity Management Institute),19, Jogeshwari Ganesh nagar, Goregaon, Mumbai",
        "properties": {
          "marker-color": "#0b00a8",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 7
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.880211,
            19.130114
          ]
        }
      },
      {
        "type": "Feature",
        "id": 8,
        "title": "Mahindra NBS international, Stanford building, Zalwad nagar, Ganga vihar, Andheri west, Mumbai",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 8
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.843387,
            19.115958
          ]
        }
      },
      {
        "type": "Feature",
        "id": 9,
        "title": "NBS international Ltd (service center), Plot no 4, Udyog nagar, S. V. road, Goregaon west, Mumbai",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 9
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.846564,
            19.172558
          ]
        }
      },
      {
        "type": "Feature",
        "id": 10,
        "title": "Salasar Autocraft Service center, Devchand Hansraj compound house no. 15, Kolshet road, Thane",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 10
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.968418,
            19.234889
          ]
        }
      },
      {
        "type": "Feature",
        "id": 11,
        "title": "Salasar Autocraft Service center, Parasnath Galaxy A Survey no. 47 Hissa no. 4 Kasarwadwali, Ghodbunder road, Thane",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross",
          "id": 11
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            72.983265,
            19.229452
          ]
        }
      },
    
  

      //Bengaluru
      {
        "type": "Feature",
        "id": 101,
        "title": "Olive Planet, Kattigenahalli, Bengaluru",
        "properties": {
          "marker-color": "#050505",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.631417,
            13.12063
          ]
        }
      },
      {
        "type": "Feature",
        "id": 102,
        "title": "Sai Menaka, Yelahanka, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.596879,
            13.098071
          ]
        }
      },
      {
        "type": "Feature",
        "id": 103,
        "title": "Agon Sports, Kothanur, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.651353,
            13.064079
          ]
        }
      },
      {
        "type": "Feature",
        "id": 104,
        "title": "Torq92, Sahakar Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.60194,
            13.057157
          ]
        }
      },
      {
        "type": "Feature",
        "id": 105,
        "title": "Gamechanger, Mathikere, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.554809,
            13.040789
          ]
        }
      },
      {
        "type": "Feature",
        "id": 106,
        "title": "IDC Kitchen, RMV 2nd Stage, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.572954,
            13.02789
          ]
        }
      },
      {
        "type": "Feature",
        "id": 107,
        "title": "Patel's Inn, RT Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.598522,
            13.02093
          ]
        }
      },
      {
        "type": "Feature",
        "id": 108,
        "title": "Cafe Azzure, Kalyan Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.635257,
            13.023624
          ]
        }
      },
      {
        "type": "Feature",
        "id": 109,
        "title": "Orion Mall, Rajajinagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.554993,
            13.01109
          ]
        }
      },
      {
        "type": "Feature",
        "id": 110,
        "title": "Nature's Basket - JM Plaza, Sadashiv Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.580626,
            13.005764
          ]
        }
      },
      {
        "type": "Feature",
        "id": 111,
        "title": "Torq92, Sahakar Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.60194,
            13.057157
          ]
        }
      },
      {
        "type": "Feature",
        "id": 112,
        "title": "The Bangalore Bakery, Malleswaram, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.571295,
            12.994246
          ]
        }
      },
      {
        "type": "Feature",
        "id": 113,
        "title": "GT World Mall, Magadi Road, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.551746,
            12.97362
          ]
        }
      },
      {
        "type": "Feature",
        "id": 114,
        "title": "Sangeetha Mobiles, Chandra Layout, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.529212,
            12.960818
          ]
        }
      },
      {
        "type": "Feature",
        "id": 115,
        "title": "Fab Cafe, RR Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.517495,
            12.934231
          ]
        }
      },
      {
        "type": "Feature",
        "id": 116,
        "title": "Royal Airavatha, Mysore Road, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.495616,
            12.922317
          ]
        }
      },
      {
        "type": "Feature",
        "id": 117,
        "title": "Khelo Badminton, Hosakerehalli, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.537087,
            12.915031
          ]
        }
      },
      {
        "type": "Feature",
        "id": 118,
        "title": "Caf Eleven, Banashankari, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.554792,
            12.923272
          ]
        }
      },
      {
        "type": "Feature",
        "id": 119,
        "title": "The Only Place, Museum Road, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.603456,
            12.973274
          ]
        }
      },
      {
        "type": "Feature",
        "id": 120,
        "title": "6000 Miles to Isle of Man, Kasturba Road, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.598233,
            12.975697
          ]
        }
      },
      {
        "type": "Feature",
        "id": 121,
        "title": "Go Native, Jayanagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.584462,
            12.922489
          ]
        }
      },
      {
        "type": "Feature",
        "id": 122,
        "title": "Cross Roads Inn, JP Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.585952,
            12.908579
          ]
        }
      },
      {
        "type": "Feature",
        "id": 123,
        "title": "ELCIA, Electric City, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.653064,
            12.86966
          ]
        }
      },
      {
        "type": "Feature",
        "id": 124,
        "title": "Smrtvng Home Automations, HSR Layout, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.649395,
            12.917839
          ]
        }
      },
      {
        "type": "Feature",
        "id": 125,
        "title": "1522, JP Nagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.599934,
            12.910662
          ]
        }
      },
      {
        "type": "Feature",
        "id": 126,
        "title": "The Cuboidal- House of Milkshakes, BTM Layout, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.603193,
            12.915476
          ]
        }
      },
      {
        "type": "Feature",
        "id": 127,
        "title": "BeAnimal  Hostel, Koramangala, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.623345,
            12.940814
          ]
        }
      },
      {
        "type": "Feature",
        "id": 128,
        "title": "Infinitea, Indiranagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.636156,
            12.968993
          ]
        }
      },
      {
        "type": "Feature",
        "id": 129,
        "title": "Ather Space, Indiranagar, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.641192,
            12.975769
          ]
        }
      },
      {
        "type": "Feature",
        "id": 130,
        "title": "Phoenix Market City, Whitefield, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.696396,
            12.995817
          ]
        }
      },
      {
        "type": "Feature",
        "id": 131,
        "title": "Forum Shantiniketan, Whitefield, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.728136,
            12.989717
          ]
        }
      },
      {
        "type": "Feature",
        "id": 132,
        "title": "Park Square Mall, Whitefield, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.736656,
            12.987505
          ]
        }
      },
      {
        "type": "Feature",
        "id": 133,
        "title": "ITPL, Whitefield, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.735554,
            12.985857
          ]
        }
      },
      {
        "type": "Feature",
        "id": 134,
        "title": "Forum Neighborhood Mall, Whitefield, Bengaluru",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.747949,
            12.959644
          ]
        }
      },
      {
        "type": "Feature",
        "id": 135,
        "title": "553, F Block (IOB Building), Sahakaranagar, Bengaluru",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.578483,
            13.066148
          ]
        }
      },
      {
        "type": "Feature",
        "id": 136,
        "title": "169 kamadhenu, shankaranagara main road, Shankaranagara, BENGALURU,560096",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.543624,
            13.016256
          ]
        }
      },
      {
        "type": "Feature",
        "id": 137,
        "title": "120 Bharathnagar 2nd stage, Prakruthi Nagar, vishwaneedam Post, Bangalore 560091, Near CII IQ office. Very near to Magadi main road NICE intersection ",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.47812,
            12.97537
          ]
        }
      },
      {
        "type": "Feature",
        "id": 138,
        "title": "149 3rd C main, 6th cross, 9th block, Nagarbhavi, 2nd stage, Bengaluru",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.608982,
            13.035742
          ]
        }
      },
      {
        "type": "Feature",
        "id": 139,
        "title": "No.4, 1st B Main, Atmananda Colony, Sultanpalya, R.T Nagar extn, Bengaluru",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.602789,
            13.026418
          ]
        }
      },
      {
        "type": "Feature",
        "id": 140,
        "title": "Arya Hamsa Apartment, 3rd Black Basement Parking No. 3G 107, 80 Feet Road, JP Nagar Phase 8, Bengaluru - 560083",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.572762,
            12.860071
          ]
        }
      },
      {
        "type": "Feature",
        "id": 141,
        "title": "405, 4 AA Cross, behind APEX bank, Bengaluru - 560043",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.656192,
            13.005064
          ]
        }
      },
      {
        "type": "Feature",
        "id": 142,
        "title": "No.40, Lakshmi Sri Navas 4th Cross, 3rd Main, 2nd Block, Ayyapa Nagar, KR Puram, Bangalore-560036",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.707371,
            13.000146
          ]
        }
      },
      {
        "type": "Feature",
        "id": 143,
        "title": "23/1, Sompura gate, Sarjapura road, opposite to Mayura paradise apartment, next to new udipi uphaar hotel, Bengaluru",
        "properties": {
          "marker-color": "#00ff33",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.772027,
            12.861886
          ]
        }
      },
      {
        "type": "Feature",
        "id": 144,
        "title": "25, 1st cross, 2nd Main Road, Behind Graphite Mahadevpura Post, Doddanakundi Industrial Area 2, Phase 1, Doddanekkundi, Bengaluru - 560048",
        "properties": {
          "marker-color": "#f59b00",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.706759,
            12.97713
          ]
        }
      },
      {
        "type": "Feature",
        "id": 145,
        "title": "#39 Middle School Road, V.V Puram, Bengaluru - 560004",
        "properties": {
          "marker-color": "#1eb201",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.57929,
            12.94976
          ]
        }
      },
      {
        "type": "Feature",
        "id": 146,
        "title": "23/1, Sompurga Gate, Sarjapura Road, Bengaluru",
        "properties": {
          "marker-color": "#1eb201",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.771005,
            12.863545
          ]
        }
      },
      {
        "type": "Feature",
        "id": 147,
        "title": "BESCOM, Corporate Office, Cubbon Park Road, Near-Vidhana Soudha, K R Circle, Nunegundlapalli, Ambedkar Veedhi, Bengaluru - 560001",
        "properties": {
          "marker-color": "#002db3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.588066,
            12.975671
          ]
        }
      },
      {
        "type": "Feature",
        "id": 148,
        "title": "Forum Mall, Hosur Rd, Chikku Lakshmaiah Layout, Koramangala, Bengaluru - 560095",
        "properties": {
          "marker-color": "#002db3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.611301,
            12.934463
          ]
        }
      },
      {
        "type": "Feature",
        "id": 149,
        "title": "Whitefield Main Rd, Devasandra Industrial Estate, Mahadevapura, Bengaluru - 560048",
        "properties": {
          "marker-color": "#002db3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.695288,
            12.996527
          ]
        }
      },
      {
        "type": "Feature",
        "id": 150,
        "title": "M&M Dealer, 108/2, 1st Cross, M.S.R Layout, Opposite to Multiplex Theatre Behind Bhagini Palace Restaurant, Marathalli, Bengaluru - 560037",
        "properties": {
          "marker-color": "#f20d0d",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.7017,
            12.9515
          ]
        }
      },
      {
        "type": "Feature",
        "id": 151,
        "title": "Mahindra Electric Vehicles Pvt Ltd, 122E Bommasandra Industrial Area, Bommasandra Jigani Link Road, Koppa, Bengaluru - 560099",
        "properties": {
          "marker-color": "#f20d0d",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.662365,
            12.810279
          ]
        }
      },
      {
        "type": "Feature",
        "id": 152,
        "title": "Whitefield Main Road, Devasandra Industrial Estate, Mahadevapura, Bengaluru - 560048",
        "properties": {
          "marker-color": "#f20d0d",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.6952880,
            12.996527
          ]
        }
      },

      //CHENNAI

      {
        "type": "Feature",
        "id": 301,
        "title": "Coco Jaunt, Anna Nagar, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.217524,
            13.090268
          ]
        }
      },
      {
        "type": "Feature",
        "id": 302,
        "title": "VR Chennai, Koyambedu, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.19713,
            13.080562
          ]
        }
      },
      {
        "type": "Feature",
        "id": 303,
        "title": "Ampa Skywalk, Aminjikarai, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.221442,
            13.073488
          ]
        }
      },
      {
        "type": "Feature",
        "id": 304,
        "title": "Ather Space, Nungambakkam, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.248496,
            13.060985
          ]
        }
      },
      {
        "type": "Feature",
        "id": 305,
        "title": "DLF, Porur, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.156545,
            13.038205
          ]
        }
      },
      {
        "type": "Feature",
        "id": 306,
        "title": "Chai Kings, Porur, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.13988,
            13.037059
          ]
        }
      },
      {
        "type": "Feature",
        "id": 307,
        "title": "Forum Mall, Vadapalani, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.207479,
            13.048496
          ]
        }
      },
      {
        "type": "Feature",
        "id": 308,
        "title": "Naturals, T Nagar, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.234176,
            13.047325
          ]
        }
      },
      {
        "type": "Feature",
        "id": 309,
        "title": "Kumaran Silks, T Nagar, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.231838,
            13.039955
          ]
        }
      },
      {
        "type": "Feature",
        "id": 310,
        "title": "Sunny Bee, Alwarpet, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.250753,
            13.030409
          ]
        }
      },
      {
        "type": "Feature",
        "id": 311,
        "title": "SPR Food Court, Ekkatuthangal, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.203056,
            13.02387
          ]
        }
      },
      {
        "type": "Feature",
        "id": 312,
        "title": "Atworks, Guindy, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.200089,
            13.006021
          ]
        }
      },
      {
        "type": "Feature",
        "id": 313,
        "title": "IIT Madras, Avadi, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.23369,
            12.991508
          ]
        }
      },
      {
        "type": "Feature",
        "id": 314,
        "title": "East Coast at Madras Square, Neelankarai, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.258865,
            12.956058
          ]
        }
      },
      {
        "type": "Feature",
        "id": 315,
        "title": "VMR Squares, Thoraipakkam, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.236562,
            12.950101
          ]
        }
      },
      {
        "type": "Feature",
        "id": 316,
        "title": "Kriyates, Okkiyampet, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.23362,
            12.92489
          ]
        }
      },
      {
        "type": "Feature",
        "id": 317,
        "title": "M's Street, Medavakkam, Chennai",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.192066,
            12.914975
          ]
        }
      },
      {
        "type": "Feature",
        "id": 318,
        "title": "Koyam Bedu Metro Station, Chennai",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.152346,
            13.10928
          ]
        }
      },
      {
        "type": "Feature",
        "id": 319,
        "title": "Chennai Egmore Metro, Chennai(CMRL)",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.193806,
            13.073051
          ]
        }
      },
      {
        "type": "Feature",
        "id": 320,
        "title": "Tirumangalam Metro Station, Chennai",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.141801,
            12.991844
          ]
        }
      },
      {
        "type": "Feature",
        "id": 321,
        "title": "National Airport's Authority, Chennai",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.18521,
            12.993471
          ]
        }
      },
      {
        "type": "Feature",
        "id": 322,
        "title": "Chennai Metro Alandur Station, Car Parking Area, Alandur, Chennai - 600016",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.201548,
            13.004215
          ]
        }
      },
      {
        "type": "Feature",
        "id": 323,
        "title": "Saidapet Metro Station, Chennai",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.228209,
            13.023719
          ]
        }
      },
      {
        "type": "Feature",
        "id": 324,
        "title": "Nandanam Metro Station, Chennai (CMRL)",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.239883,
            13.031429
          ]
        }
      },
      {
        "type": "Feature",
        "id": 325,
        "title": "High Court Metro Station, Chennai",
        "properties": {
          "marker-color": "#0003b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.241973,
            13.031848
          ]
        }
      },
      {
        "type": "Feature",
        "id": 326,
        "title": "Vinoth Kishore Agencies, Tamil Nadu - 631210",
        "properties": {
          "marker-color": "#00b30c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            79.772475,
            13.127153
          ]
        }
      },
      {
        "type": "Feature",
        "id": 327,
        "title": "2/1, Veerapandi Nagar, 1st Street, Choolaimedu, Chennai - 600094",
        "properties": {
          "marker-color": "#00b30c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.216421,
            13.063491
          ]
        }
      },
      {
        "type": "Feature",
        "id": 328,
        "title": "Anna Nagar East Metro Station, Chennai (CMRL)",
        "properties": {
          "marker-color": "#00b30c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.210286,
            12.995922
          ]
        }
      },
      {
        "type": "Feature",
        "id": 329,
        "title": "25, RK Nagar, Alwartirunagar, Chennai",
        "properties": {
          "marker-color": "#00b30c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            80.180472,
            13.047035
          ]
        }
      },

      //DELHI

      {
        "type": "Feature",
        "id": 201,
        "title": "J-Block, Malviya Nagar Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.080199,
            28.583686
          ]
        }
      },
      {
        "type": "Feature",
        "id": 202,
        "title": "PVR Priya, Vasant Vihar",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.082977,
            28.497482
          ]
        }
      },
      {
        "type": "Feature",
        "id": 203,
        "title": "EESL H-Block, Sarita Vihar, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.291393,
            28.534966
          ]
        }
      },
      {
        "type": "Feature",
        "id": 204,
        "title": "Cross River Mall, Plot Number- 9B&9C, CBD Ground Shahdara, New Delhi - 110032",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.302482,
            28.658282
          ]
        }
      },
      {
        "type": "Feature",
        "id": 205,
        "title": "EESL PVR Priya Vasant Vihar, SDMC Parking, New Delhi, Near Gold's Gym",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.157684,
            28.557662
          ]
        }
      },
      {
        "type": "Feature",
        "id": 206,
        "title": "Near Bikanervala, Yashwant Place, Chanakyapuri, New Delhi - 110021",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.163408,
            28.583882
          ]
        }
      },
      {
        "type": "Feature",
        "id": 207,
        "title": "Charak Palika Hospital, C7 Lane, Moti Bagh 1, Block F, New Moti Bagh, New Delhi - 110021",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.177094,
            28.585287
          ]
        }
      },
      {
        "type": "Feature",
        "id": 208,
        "title": "RK Puram, Sector 12, Market",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.176554,
            28.574303
          ]
        }
      },
      {
        "type": "Feature",
        "id": 209,
        "title": "SDMC, GK-1, N Block Market, New Delhi - 110048",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.173533,
            28.573051
          ]
        }
      },
      {
        "type": "Feature",
        "id": 210,
        "title": "SDMC Parking, Aurbindo Market Place, Hauz Khas, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.190822,
            28.545394
          ]
        }
      },
      {
        "type": "Feature",
        "id": 211,
        "title": "SDMC Parking, SDA Market, Hauz Khas, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.196354,
            28.54639
          ]
        }
      },
      {
        "type": "Feature",
        "id": 212,
        "title": " C/o SDMC, Hauz Khas Village, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.200274,
            28.54717
          ]
        }
      },
      {
        "type": "Feature",
        "id": 213,
        "title": "SDMC Parking, B6, Safderjung Enclave, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.196903,
            28.559816
          ]
        }
      },
      {
        "type": "Feature",
        "id": 214,
        "title": " EV Parking Slot 2, SDMC Parking, Hauz Khas Village, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.195282,
            28.554333
          ]
        }
      },
      {
        "type": "Feature",
        "id": 215,
        "title": " EV Parking Slot 3-5, SDMC Parking, Hauz Khas Village, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.194165,
            28.553399
          ]
        }
      },
      {
        "type": "Feature",
        "id": 216,
        "title": "EESL, Plot 81-85, Nehru Place, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.254106,
            28.548871
          ]
        }
      },
      {
        "type": "Feature",
        "id": 217,
        "title": " Josip Broz Tito Marg, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.228594,
            28.548162
          ]
        }
      },
      {
        "type": "Feature",
        "id": 218,
        "title": " SDMC Parking, R Block, GK-1, New Delhi - 110016",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.24487,
            28.550013
          ]
        }
      },
      {
        "type": "Feature",
        "id": 219,
        "title": " EESL N-Block GK-1, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.234048,
            28.556841
          ]
        }
      },
      {
        "type": "Feature",
        "id": 220,
        "title": " EV Parking Slot 3-5, SDMC Parking, GK-1, N Block Market, New Delhi - 110048",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.232138,
            28.55664
          ]
        }
      },
      {
        "type": "Feature",
        "id": 221,
        "title": " Feroze Gandhi Road, Lajpat Nagar, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.243793,
            28.567615
          ]
        }
      },
      {
        "type": "Feature",
        "id": 222,
        "title": " Veer Savarkar Marg, Lajpat Nagar, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.243287,
            28.569303
          ]
        }
      },
      {
        "type": "Feature",
        "id": 223,
        "title": "Dharma Marg, Block Y, Diplomatic Enclave, Malcha Market, New Delhi - 110021",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.186617,
            28.602356
          ]
        }
      },
      {
        "type": "Feature",
        "id": 224,
        "title": "Yashwant Place, Chanakyapuri, New Delhi - 110021",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.191,
            28.585305
          ]
        }
      },
      {
        "type": "Feature",
        "id": 225,
        "title": "PSOI Club, Chanakyapuri, New Delhi - 110021",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.19364,
            28.586617
          ]
        }
      },
      {
        "type": "Feature",
        "id": 226,
        "title": "Sarojini Nagar Market, Sarojini Nagar, New Delhi - 110023",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.197238,
            28.577231
          ]
        }
      },
      {
        "type": "Feature",
        "id": 227,
        "title": "Post Office, Laxmi Bai Nagar, Safderjung Flyover, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.209231,
            28.578452
          ]
        }
      },
      {
        "type": "Feature",
        "id": 228,
        "title": "NMDC Parking, Dilli Haat, West Kidwai Nagar, New Delhi - 110023",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.208055,
            28.572639
          ]
        }
      },
      {
        "type": "Feature",
        "id": 229,
        "title": "Opposite Dory Pharmacy, Khanna Market, Aliganj, Lodhi Colony, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.220087,
            28.582653
          ]
        }
      },
      {
        "type": "Feature",
        "id": 230,
        "title": "Palika Maternity Hospital, Block 11, Lodhi Colony, Near Khanna Market, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.221822,
            28.583804
          ]
        }
      },
      {
        "type": "Feature",
        "id": 231,
        "title": "Opposite Goel Opticals, Khanna Market, Aliganj, Lodhi Colony, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.220316,
            28.584485
          ]
        }
      },
      {
        "type": "Feature",
        "id": 232,
        "title": "Gate No. 1, Lodhi Garden, Lodhi Estate, Lodhi Road, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.224284,
            28.59071
          ]
        }
      },
      {
        "type": "Feature",
        "id": 233,
        "title": "Meharchand Market, SDMC Parking, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.227941,
            28.586018
          ]
        }
      },
      {
        "type": "Feature",
        "id": 234,
        "title": "Outside RWA Park, Jor Bagh Market, Jor Bagh Colony Road, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.217697,
            28.588303
          ]
        }
      },
      {
        "type": "Feature",
        "id": 235,
        "title": "Meharchand Market, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.217555,
            28.588111
          ]
        }
      },
      {
        "type": "Feature",
        "id": 236,
        "title": "Side of Hotel Claridges, Tees January Mark, Dr. APJ Abdul Kalam Road, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.217889,
            28.602443
          ]
        }
      },
      {
        "type": "Feature",
        "id": 237,
        "title": "Prithviraj Market, Rabindra Nagar, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.226252,
            28.600725
          ]
        }
      },
      {
        "type": "Feature",
        "id": 238,
        "title": "Khan Market, Rabindra Nagar, New Delhi - 110003",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.226888,
            28.600333
          ]
        }
      },
      {
        "type": "Feature",
        "id": 239,
        "title": "Outside Jain Bhawan, 12 Shaheed Bhagat Singh Marg, Gole Market, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.207443,
            28.633841
          ]
        }
      },
      {
        "type": "Feature",
        "id": 240,
        "title": "Talkatora Stadium, President's Estate, New Delhi - 110004",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.195234,
            28.625294
          ]
        }
      },
      {
        "type": "Feature",
        "id": 241,
        "title": "Talkatora Stadium, President's Estate, New Delhi - 110004",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.195234,
            28.624835
          ]
        }
      },
      {
        "type": "Feature",
        "id": 242,
        "title": "Janpath Guest House, Connaught Place, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.218963,
            28.623779
          ]
        }
      },
      {
        "type": "Feature",
        "id": 243,
        "title": "DLF Building, Sansad Marg, Janpath, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.218304,
            28.621238
          ]
        }
      },
      {
        "type": "Feature",
        "id": 244,
        "title": "Outside Bharat Sanchar Bhawan, Ashoke Road, Janpath, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.214249,
            28.622224
          ]
        }
      },
      {
        "type": "Feature",
        "id": 245,
        "title": "Akashvani Bhawan, Sansad Marg, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.213555,
            28.624515
          ]
        }
      },
      {
        "type": "Feature",
        "id": 246,
        "title": "Outside Standard Chartered Bank, Sardar Patel Bhawan, Sansad Marg, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.212581,
            28.624251
          ]
        }
      },
      {
        "type": "Feature",
        "id": 247,
        "title": "Outside Chelmsford Club/ Opposite CSIR Building, Rafi Marg, Sansad Marg Area, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.212995,
            28.617783
          ]
        }
      },
      {
        "type": "Feature",
        "id": 248,
        "title": "Press Club of India, 1, Raisina Road, Windsor Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.213645,
            28.617193
          ]
        }
      },
      {
        "type": "Feature",
        "id": 249,
        "title": "FICCI, FICCI Chowk, Mandi House, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.231853,
            28.626869
          ]
        }
      },
      {
        "type": "Feature",
        "id": 250,
        "title": "NDMC Parking, Near Ferns n Petals, Near BPCL Petrol Pump, C Block RR5, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.215515,
            28.628162
          ]
        }
      },
      {
        "type": "Feature",
        "id": 251,
        "title": "Near NDMC Office, Fire Brigade Lane, Barakhamba, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.225557,
            28.630448
          ]
        }
      },
      {
        "type": "Feature",
        "id": 252,
        "title": "Gopal Das Building, Barakhamba Road, Connaught Lane, Barakhamba, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.223491,
            28.631315
          ]
        }
      },
      {
        "type": "Feature",
        "id": 253,
        "title": "Outside Oriental Bank, Radial Road No. 7, Block M, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.222107,
            28.631729
          ]
        }
      },
      {
        "type": "Feature",
        "id": 254,
        "title": "Opposite HP Petrol Pump, Block E, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.221582,
            28.631896
          ]
        }
      },
      {
        "type": "Feature",
        "id": 255,
        "title": "Oposite IVORY Mart, F Block, Inner Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.219979,
            28.631315
          ]
        }
      },
      {
        "type": "Feature",
        "id": 256,
        "title": "Indian Coffee House, Connaught Place, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.216518,
            28.630809
          ]
        }
      },
      {
        "type": "Feature",
        "id": 257,
        "title": "Outside Devinder Collections, Shankar Market, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.223492,
            28.633675
          ]
        }
      },
      {
        "type": "Feature",
        "id": 258,
        "title": "Opposite South Indian Bank, Block E, RR6, Middle Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.221542,
            28.633882
          ]
        }
      },
      {
        "type": "Feature",
        "id": 259,
        "title": "Near Snow White, Block D, Inner Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.220579,
            28.63363
          ]
        }
      },
      {
        "type": "Feature",
        "id": 260,
        "title": "Next to PVR Plaza, H Block RR4, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.219611,
            28.635011
          ]
        }
      },
      {
        "type": "Feature",
        "id": 261,
        "title": "Outside UCO Bank, Block H, RR3, Connaught Place, New Delhi",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.21842,
            28.635112
          ]
        }
      },
      {
        "type": "Feature",
        "id": 262,
        "title": "16-B, Woodland Showroom, Block B, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.218779,
            28.634071
          ]
        }
      },
      {
        "type": "Feature",
        "id": 263,
        "title": "Outside Westend Vedi Tailors, Block M, Middle Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.21814,
            28.633686
          ]
        }
      },
      {
        "type": "Feature",
        "id": 264,
        "title": "Outside Iqbal Bros., G1, Block G, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.217455,
            28.633797
          ]
        }
      },
      {
        "type": "Feature",
        "id": 265,
        "title": "Outside Van Heusen Showroom, Block C, Inner Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.21798,
            28.632989
          ]
        }
      },
      {
        "type": "Feature",
        "id": 266,
        "title": "Near ICCI Bank/Metro Gate No. 7 & 8, Block A, Inner Circle, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.217847,
            28.632723
          ]
        }
      },
      {
        "type": "Feature",
        "id": 267,
        "title": "Opposite HDFC Bank, M- Block, Connaught Place, New Delhi - 110001",
        "properties": {
          "marker-color": "#030193",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.216801,
            28.632766
          ]
        }
      },
      {
        "type": "Feature",
        "id": 268,
        "title": "Oyo Townhouse 381, Dilshad Garden, New Delhi",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.323222,
            28.689067
          ]
        }
      },
      {
        "type": "Feature",
        "id": 269,
        "title": "Oyo Townhouse 118, Krishna Nagar, New Delhi",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.29665,
            28.64593
          ]
        }
      },
      {
        "type": "Feature",
        "id": 270,
        "title": "A-40 Mohan Co-Operative Estate, New Delhi",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.292887,
            28.521451
          ]
        }
      },
      {
        "type": "Feature",
        "id": 271,
        "title": "55 Rama RD Indl. Area, Motinagar, Block B, Najafgarh Road Industrial Area, New Delhi - 110015",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.154809,
            28.661027
          ]
        }
      },
      {
        "type": "Feature",
        "id": 272,
        "title": "Suvidha appt sector 13, New Delhi",
        "properties": {
          "marker-color": "#00ff4c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.123591,
            28.720853
          ]
        }
      },
      {
        "type": "Feature",
        "id": 273,
        "title": "B-5/30, 2nd Floor, Rohini, New Delhi - 110089",
        "properties": {
          "marker-color": "#00ff4c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.1196,
            28.7429
          ]
        }
      },
      {
        "type": "Feature",
        "id": 274,
        "title": "C 26, East of Kailash, Delhi",
        "properties": {
          "marker-color": "#00ff4c",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.256972,
            28.560942
          ]
        }
      },
      {
        "type": "Feature",
        "id": 275,
        "title": "Plot No. 550, Gali No D-18, Chhattarpur Pahari, 100 Futa Road, New Delhi",
        "properties": {
          "marker-color": "#03a50e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.083685,
            28.634828
          ]
        }
      },
      {
        "type": "Feature",
        "id": 276,
        "title": "F 32/2, Okhla Industrial Estate - Phase 2, New Delhi - 110020",
        "properties": {
          "marker-color": "#03a50e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.27077,
            28.53764
          ]
        }
      },
      {
        "type": "Feature",
        "id": 277,
        "title": "Netaji Marg, Babarpur Village, Babarpur, New Delhi - 110032",
        "properties": {
          "marker-color": "#03a50e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.28231,
            28.688129
          ]
        }
      },
      {
        "type": "Feature",
        "id": 278,
        "title": "New Jaffrabad, Babarpur, New Delhi - 110032",
        "properties": {
          "marker-color": "#03a50e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            77.281003,
            28.685881
          ]
        }
      },
      
    //PUNE
      
      {
        "type": "Feature",
        "id": 401,
        "title": "Opposite Pashan Lake, Jogging Track, Tulaja Bhavani Mandir, Pashan, Pune - 411021",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.779464,
            18.532092
          ]
        }
      },
      {
        "type": "Feature",
        "id": 402,
        "title": "692/5B 'Suraj', Nandadeep Society, Near Hotel Tiranga, Pune Satara Road, Pune - 411037",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.858543,
            18.488079
          ]
        }
      },
      {
        "type": "Feature",
        "id": 403,
        "title": "128/3/1, Barangani Mala, Nanded phata-Dhayari road, Dhayari, Pune - 411041",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.79864,
            18.44953
          ]
        }
      },
      {
        "type": "Feature",
        "id": 404,
        "title": "Bhau Patil Rd, Bapodi Gaothan, Bopodi, Pune - 411003",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.83388,
            18.572748
          ]
        }
      },
      {
        "type": "Feature",
        "id": 405,
        "title": "Behind Fountain Inn Hotel, Aundh Annexe, Rahatani, Pune - 411017",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.78262,
            18.6009
          ]
        }
      },
      {
        "type": "Feature",
        "id": 406,
        "title": "C601 Greens Society, Aditya Birla Road, Opp. Pudumjee Paper Mill, Thergaon, Chinchwad, Pune - 411033",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.769183,
            18.619975
          ]
        }
      },
      {
        "type": "Feature",
        "id": 407,
        "title": "Hedge Accessories and Components, 15B/ 8 D 1 Block MIDC Chinchwad, Pune - 411019",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.790746,
            18.654373
          ]
        }
      },
      {
        "type": "Feature",
        "id": 408,
        "title": "Madhur Complex, Shop no 3 & 4, Sector CDC, Opp to HP Petrol Pump, Chinchwad",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.812068,
            18.662691
          ]
        }
      },
      {
        "type": "Feature",
        "id": 409,
        "title": "Plot no 4/25, sector 10, PCNTDA, Bhosari",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.835221,
            18.6490427
          ]
        }
      },
      {
        "type": "Feature",
        "id": 410,
        "title": "Kondhwa Budruk, Pune",
        "properties": {
          "marker-color": "#00b31e",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.894214,
            18.440085
          ]
        }
      },
      {
        "type": "Feature",
        "id": 411,
        "title": "Copacabanna, Wakad, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.782523,
            18.588784
          ]
        }
      },
      {
        "type": "Feature",
        "id": 412,
        "title": "Subway,Aundh, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.805101,
            18.560608
          ]
        }
      },
      {
        "type": "Feature",
        "id": 413,
        "title": "Subway, Paud Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.803866,
            18.507304
          ]
        }
      },
      {
        "type": "Feature",
        "id": 414,
        "title": "Kalinga Veg Gourmet, Karve Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.832197,
            18.505014
          ]
        }
      },
      {
        "type": "Feature",
        "id": 415,
        "title": "Kalyan Bhel, Bibevewadi, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.866781,
            18.480453
          ]
        }
      },
      {
        "type": "Feature",
        "id": 416,
        "title": "Bliss Bakery and Cafe, NIBM, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.901384,
            18.478853
          ]
        }
      },
      {
        "type": "Feature",
        "id": 417,
        "title": "KB's Woodland, Sadhu Vaswani Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.875863,
            18.525156
          ]
        }
      },
      {
        "type": "Feature",
        "id": 418,
        "title": "Eat and Repeat Cafe, JM Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.847638,
            18.523267
          ]
        }
      },
      {
        "type": "Feature",
        "id": 419,
        "title": "Cafe Kaatha, FC Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.840675,
            18.520865
          ]
        }
      },
      {
        "type": "Feature",
        "id": 420,
        "title": "Ather Space, Bhandarkar Road, Pune",
        "properties": {
          "marker-color": "#000000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.830673,
            18.518921
          ]
        }
      },
      {
        "type": "Feature",
        "id": 421,
        "title": "247, Kaspate Vasti Rd, Wakad, Pimpri-Chinchwad, Pune - 411057",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.76689,
            18.59112
          ]
        }
      },
      {
        "type": "Feature",
        "id": 422,
        "title": "43/1, 44/1/1, Near to Pashan Sus Bridge, Pune - 411045",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.77289,
            18.54843
          ]
        }
      },
      {
        "type": "Feature",
        "id": 423,
        "title": "12, Moledina Road, Pune - 411001",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.878493,
            18.510244
          ]
        }
      },
      {
        "type": "Feature",
        "id": 424,
        "title": "City Space, Opp. to Inorbit Mall, Viman Nagar, Pune - 411014",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.921428,
            18.562224
          ]
        }
      },
      {
        "type": "Feature",
        "id": 425,
        "title": "Ubale Nagar, Near Jaibhairavnath Warehouse, Wagholi, Pune - 412207",
        "properties": {
          "marker-color": "#ff0000",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.962404,
            18.569537
          ]
        }
      },
      {
        "type": "Feature",
        "id": 426,
        "title": "416, Lane 2, Mahatma Society, Pune",
        "properties": {
          "marker-color": "#00f510",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.799278,
            18.495986
          ]
        }
      },
      {
        "type": "Feature",
        "id": 427,
        "title": "Plot 32, Cloud 9 Society, NIBM PO road, Mohammadwadi PO, Pune - 411060",
        "properties": {
          "marker-color": "#00f510",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.912093,
            18.478589
          ]
        }
      },
      {
        "type": "Feature",
        "id": 427,
        "title": "Yashodhan Bangalow, Plot No. 23, Near Mahatma Society, Prathamesh Society, Pune - 411038",
        "properties": {
          "marker-color": "#0300b3",
          "marker-size": "medium",
          "marker-symbol": "cross"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.794157,
            18.497127
          ]
        }
      }
    ]
  }
  

 /* buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
   this.map.addControl(new mapboxgl.NavigationControl());
  }

  /*
  function successLocation(position){
    buildMap([position.coords.longitude, position.coords.latitude])
  }

  function errorLocation(position){
    buildMap([73.093948 , 19.209400])
  }
  */
}
