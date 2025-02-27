import { useState } from 'react'
import { styled } from 'styled-components'
import Table_page from './component/Table_page'

function App() {
    //Main data here
  const [sapling_master,setsapling_master] = useState([
    {
        "saplings_name": "Mango\n( Native )",
        "saplings_code": "S00030",
        "sequence_number": "1"
    },
    {
        "saplings_name": "Mango ( Grafted - Kesar)",
        "saplings_code": "S00029",
        "sequence_number": "2"
    },
    {
        "saplings_name": "Lemon ( Sai Sharbati)",
        "saplings_code": "S00028",
        "sequence_number": "3"
    },
    {
        "saplings_name": "Sitafal\n( Native)",
        "saplings_code": "S00043",
        "sequence_number": "4"
    },
    {
        "saplings_name": "Sitafal\n( Golden)",
        "saplings_code": "S00042",
        "sequence_number": "5"
    },
    {
        "saplings_name": "Sitafal (Balanagar)",
        "saplings_code": "S00041",
        "sequence_number": "6"
    },
    {
        "saplings_name": "Awala",
        "saplings_code": "S00003",
        "sequence_number": "7"
    },
    {
        "saplings_name": "Awala (Grafted)",
        "saplings_code": "S00004",
        "sequence_number": "8"
    },
    {
        "saplings_name": "Peru",
        "saplings_code": "S00035",
        "sequence_number": "9"
    },
    {
        "saplings_name": "Peru (Sardar)",
        "saplings_code": "S00036",
        "sequence_number": "10"
    },
    {
        "saplings_name": "Chincha",
        "saplings_code": "S00013",
        "sequence_number": "11"
    },
    {
        "saplings_name": "Chincha (Grafted)",
        "saplings_code": "S00014",
        "sequence_number": "12"
    },
    {
        "saplings_name": "Jamun",
        "saplings_code": "S00018",
        "sequence_number": "13"
    },
    {
        "saplings_name": "Jamun (Bardoli)",
        "saplings_code": "S00019",
        "sequence_number": "14"
    },
    {
        "saplings_name": "Chikku",
        "saplings_code": "S00012",
        "sequence_number": "15"
    },
    {
        "saplings_name": "Orange",
        "saplings_code": "S00032",
        "sequence_number": "16"
    },
    {
        "saplings_name": "Mosambi",
        "saplings_code": "S00031",
        "sequence_number": "17"
    },
    {
        "saplings_name": "Dalimb",
        "saplings_code": "S00015",
        "sequence_number": "18"
    },
    {
        "saplings_name": "Ramfal",
        "saplings_code": "S00038",
        "sequence_number": "19"
    },
    {
        "saplings_name": "Drumstick (Koimb)",
        "saplings_code": "S00016",
        "sequence_number": "20"
    },
    {
        "saplings_name": "Drumstick (ODC)",
        "saplings_code": "S00017",
        "sequence_number": "21"
    },
    {
        "saplings_name": "Papayya (15 No)",
        "saplings_code": "S00034",
        "sequence_number": "22"
    },
    {
        "saplings_name": "Bamboo",
        "saplings_code": "S00008",
        "sequence_number": "23"
    },
    {
        "saplings_name": "Karwand",
        "saplings_code": "S00024",
        "sequence_number": "24"
    },
    {
        "saplings_name": "Arjun",
        "saplings_code": "S00002",
        "sequence_number": "25"
    },
    {
        "saplings_name": "Katesawar",
        "saplings_code": "S00025",
        "sequence_number": "26"
    },
    {
        "saplings_name": "Karanj",
        "saplings_code": "S00023",
        "sequence_number": "27"
    },
    {
        "saplings_name": "Kaduneem",
        "saplings_code": "S00021",
        "sequence_number": "28"
    },
    {
        "saplings_name": "Bahava",
        "saplings_code": "S00006",
        "sequence_number": "29"
    },
    {
        "saplings_name": "Kanchan",
        "saplings_code": "S00022",
        "sequence_number": "30"
    },
    {
        "saplings_name": "kadamb",
        "saplings_code": "S00020",
        "sequence_number": "31"
    },
    {
        "saplings_name": "Bhendi",
        "saplings_code": "S00010",
        "sequence_number": "32"
    },
    {
        "saplings_name": "Shirish",
        "saplings_code": "S00039",
        "sequence_number": "33"
    },
    {
        "saplings_name": "Kokam",
        "saplings_code": "S00027",
        "sequence_number": "34"
    },
    {
        "saplings_name": "Ain",
        "saplings_code": "S00001",
        "sequence_number": "35"
    },
    {
        "saplings_name": "Pimpal",
        "saplings_code": "S00037",
        "sequence_number": "36"
    },
    {
        "saplings_name": "Vad",
        "saplings_code": "S00047",
        "sequence_number": "37"
    },
    {
        "saplings_name": "Tamhan",
        "saplings_code": "S00044",
        "sequence_number": "38"
    },
    {
        "saplings_name": "Waval",
        "saplings_code": "S00048",
        "sequence_number": "39"
    },
    {
        "saplings_name": "Umbar",
        "saplings_code": "S00046",
        "sequence_number": "40"
    },
    {
        "saplings_name": "Palas",
        "saplings_code": "S00033",
        "sequence_number": "41"
    },
    {
        "saplings_name": "Babhul",
        "saplings_code": "S00005",
        "sequence_number": "42"
    },  
    {
        "saplings_name": "Bakul",
        "saplings_code": "S00007",
        "sequence_number": "43"
    },
    {
        "saplings_name": "Shisam",
        "saplings_code": "S00040",
        "sequence_number": "44"
    },
    {
        "saplings_name": "Kawath",
        "saplings_code": "S00026",
        "sequence_number": "45"
    }, 
    {
        "saplings_name": "Bija",
        "saplings_code": "S00011",
        "sequence_number": "46"
    }, 
    {
        "saplings_name": "Bel",
        "saplings_code": "S00009",
        "sequence_number": "47"
    },
    {
        "saplings_name": "Teak",
        "saplings_code": "S00045",
        "sequence_number": "48"
    } 
])
const [saplin_inward_outward,setsapling_inward_outward] = useState(
  {
    "sapling_stock_res_by_warehouse": [
        {
            "sapling_item_code": "S00001",
            "sapling_item_name": "Ain",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "5000",
            "sum_sapling_outward": "560",
            "sapling_balance_stock": "4440"
        },
        {
            "sapling_item_code": "S00002",
            "sapling_item_name": "Arjun",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "10",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00004",
            "sapling_item_name": "Awala (Grafted)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "20",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00005",
            "sapling_item_name": "Babhul",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "300",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00007",
            "sapling_item_name": "Bakul",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "160",
            "sapling_balance_stock": "440"
        },
        {
            "sapling_item_code": "S00008",
            "sapling_item_name": "Bamboo",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "360",
            "sapling_balance_stock": "140"
        },
        {
            "sapling_item_code": "S00010",
            "sapling_item_name": "Bhendi",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00012",
            "sapling_item_name": "Chikku",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "63",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00013",
            "sapling_item_name": "Chincha",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "50",
            "sapling_balance_stock": "450"
        },
        {
            "sapling_item_code": "S00013",
            "sapling_item_name": "Chincha",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "59",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00014",
            "sapling_item_name": "Chincha (Grafted)",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00014",
            "sapling_item_name": "Chincha (Grafted)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "50",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00015",
            "sapling_item_name": "Dalimb",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00016",
            "sapling_item_name": "Drumstick (Koimb)",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "150",
            "sapling_balance_stock": "450"
        },
        {
            "sapling_item_code": "S00016",
            "sapling_item_name": "Drumstick (Koimb)",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00016",
            "sapling_item_name": "Drumstick (Koimb)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00017",
            "sapling_item_name": "Drumstick (ODC)",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00017",
            "sapling_item_name": "Drumstick (ODC)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "100",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00018",
            "sapling_item_name": "Jamun",
            "warehouse_name": "Dhawalgaon-Shinde Suresh Baban",
            "warehouse_code": "W0001",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "250",
            "sapling_balance_stock": "250"
        },
        {
            "sapling_item_code": "S00021",
            "sapling_item_name": "Kaduneem",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00029",
            "sapling_item_name": "Mango ( Grafted - Kesar)",
            "warehouse_name": "Karjat-Navnath Ragunath Shinde",
            "warehouse_code": "W0003",
            "sum_sapling_inward": "900",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00029",
            "sapling_item_name": "Mango ( Grafted - Kesar)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "400",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        },
        {
            "sapling_item_code": "S00042",
            "sapling_item_name": "Sitafal\n( Golden)",
            "warehouse_name": "Ambad-Govind Ashok kumar Lahoti",
            "warehouse_code": "W0006",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "0"
        }
    ],
    "sapling_stock_res_by_sapling": [
        {
            "sapling_item_code": "S00001",
            "sapling_item_name": "Ain",
            "sum_sapling_inward": "5000",
            "sum_sapling_outward": "560",
            "sapling_balance_stock": "4440"
        },
        {
            "sapling_item_code": "S00002",
            "sapling_item_name": "Arjun",
            "sum_sapling_inward": "10",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "10"
        },
        {
            "sapling_item_code": "S00004",
            "sapling_item_name": "Awala (Grafted)",
            "sum_sapling_inward": "20",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "20"
        },
        {
            "sapling_item_code": "S00005",
            "sapling_item_name": "Babhul",
            "sum_sapling_inward": "300",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "300"
        },
        {
            "sapling_item_code": "S00007",
            "sapling_item_name": "Bakul",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "160",
            "sapling_balance_stock": "440"
        },
        {
            "sapling_item_code": "S00008",
            "sapling_item_name": "Bamboo",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "360",
            "sapling_balance_stock": "140"
        },
        {
            "sapling_item_code": "S00010",
            "sapling_item_name": "Bhendi",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "600"
        },
        {
            "sapling_item_code": "S00012",
            "sapling_item_name": "Chikku",
            "sum_sapling_inward": "63",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "63"
        },
        {
            "sapling_item_code": "S00013",
            "sapling_item_name": "Chincha",
            "sum_sapling_inward": "559",
            "sum_sapling_outward": "50",
            "sapling_balance_stock": "509"
        },
        {
            "sapling_item_code": "S00014",
            "sapling_item_name": "Chincha (Grafted)",
            "sum_sapling_inward": "650",
            "sum_sapling_outward": "10",
            "sapling_balance_stock": "640"
        },
        {
            "sapling_item_code": "S00015",
            "sapling_item_name": "Dalimb",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "100",
            "sapling_balance_stock": "500"
        },
        {
            "sapling_item_code": "S00016",
            "sapling_item_name": "Drumstick (Koimb)",
            "sum_sapling_inward": "1700",
            "sum_sapling_outward": "150",
            "sapling_balance_stock": "1550"
        },
        {
            "sapling_item_code": "S00017",
            "sapling_item_name": "Drumstick (ODC)",
            "sum_sapling_inward": "600",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "600"
        },
        {
            "sapling_item_code": "S00018",
            "sapling_item_name": "Jamun",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "250",
            "sapling_balance_stock": "250"
        },
        {
            "sapling_item_code": "S00021",
            "sapling_item_name": "Kaduneem",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "50",
            "sapling_balance_stock": "450"
        },
        {
            "sapling_item_code": "S00029",
            "sapling_item_name": "Mango ( Grafted - Kesar)",
            "sum_sapling_inward": "1300",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "1300"
        },
        {
            "sapling_item_code": "S00042",
            "sapling_item_name": "Sitafal\n( Golden)",
            "sum_sapling_inward": "500",
            "sum_sapling_outward": "0",
            "sapling_balance_stock": "500"
        }
    ]
}


)
  return (
    <Main >
      <Heading><h1>Sapling Stock by wearhouse</h1></Heading>
      {/* Main table Component */}
      <Table_page heading={sapling_master} details={saplin_inward_outward}/>
    </Main>
    
  )




}

export default App
const Heading = styled.div`
font-size: larger;
color: blueviolet;
background-color: #e5efc3;

`
const Main = styled.div`
margin: 5px;
font-family: 'Roboto', sans-serif;
max-width: fit-content;

`




