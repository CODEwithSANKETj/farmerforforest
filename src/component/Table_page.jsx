import React,{ useState }  from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Td_data from './Td_data';

const cellStyle = {
  padding: '8px',
  textAlign: 'center',
  border:'1px solid lightgray',
  
};

const stickyTDCellStyle = {
  ...cellStyle,
  border:'1px solid lightgray',
  background: '#dee6d2',
};
const stickytheadCellStyle = {
  ...cellStyle,
  border:'1px solid lightgray ',
  position:'sticky',
  top:'0',
  background: '#dee6d2',
};

//Basic style saved golbally

function TablePage({ heading, details }) {
  //Obj to get warehouse name rows only once
  let warehousemap = new Map();
  return (

   
        <TableContainer marginTop={'20px'} overflow="scroll" maxHeight="550px" overflowY={'auto'} >
          <Table border={'1px solid #dee6d2'}  variant="simple" sx={{ borderCollapse:'separate',width: '100%',borderSpacing:'0' }}>
            <Thead >
              <Tr>
                <Th
                  {...stickytheadCellStyle}
                left={'0'}
                zIndex={'5'}
                textAlign={'left'}
                >
                  WEARHOUSE NAME
                </Th>
                {/* Dynamic th cells */}
                {heading.map((item, index) => (
                  <Th
                    key={index}
                    {...stickytheadCellStyle}
                    
                    
                  >
                    {item.saplings_name}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td
                {...stickyTDCellStyle}
                position={'sticky'}
                left={'0'}
                >
                  <div style={{display:'flex',gap:'60px',justifyContent:'space-between'}}>
                    <div>
                        <h4>All Stocks by Sapling</h4>
                    </div>
                    <div style={{ display: 'flex', gap:'4px',flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'end' }}>
                        <p>Total Stock</p>
                        <p>Total Distribute</p>
                        <p style={{backgroundColor:'#cefc84',paddingLeft:'10px',paddingRight:'5px'}}>Balance Stock</p>
                    </div>
                  </div>
                </Td>
                  {/* Dynamic td for each row after wearhouse name */}
                {heading.map((item, index) => {
                  // Logic for finding if the wearhouse 
                  //have the sapling mention in the coloum by comparing sapling code
                  let result = details.sapling_stock_res_by_sapling.find(
                    (each) => each.sapling_item_code == item.saplings_code
                  );
                  return (
                    <Td
                      key={index}
                     {...cellStyle}
                    >
                      <div>
                        <Td_data result={result} first={true} />
                      </div>
                    </Td>
                  );
                })}
              </Tr>

              {/* Dynamic Rows here */}
              {details.sapling_stock_res_by_warehouse.map((warehouse, index) => {
               /////Logic for not having same Rows with same warehouse names
               if (warehousemap.has(warehouse.warehouse_code)) {
                  return null;
                }
                warehousemap.set(warehouse.warehouse_code, true);
                return (
                  <Tr key={index}
                  >
                    <Td
                      {...stickyTDCellStyle}
                      fontSize="medium"
                      justifyContent="space-between"
                      position={'sticky'}
                      left={'0'}
                    >
                      <div style={{display:'flex',gap:'40px',justifyContent:'space-between'}}>
                        <div>
                            <h4>{warehouse.warehouse_name}</h4>
                        </div>
                        <div style={{ display: 'flex',paddingLeft:'15px', gap:'4px', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'end' }}>
                            <p>Total Stock</p>
                            <p>Total Distribute</p>
                            <p style={{backgroundColor:'yellow',paddingLeft:'10px',paddingRight:'5px'}}>Balance Stock</p>
                        </div>
                      </div>
                    </Td>

                    {heading.map((item, index) => {
                      let result = details.sapling_stock_res_by_warehouse.find(
                        (each) => each.sapling_item_code == item.saplings_code && each.warehouse_code == warehouse.warehouse_code
                      );
                      return (
                        <Td
                          key={index}
                          {...cellStyle}
                          
                        >
                          <div>

                            {/* Table for Each td here cooming from different component */}
                            <Td_data result={result} first={false} />
                          </div>
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
    
   
  );
}

export default TablePage;
