import React from 'react';
import { Table, Tbody, Tr, Td } from '@chakra-ui/react';

function TdData({ result , first }) {
  return (
    <Table minWidth={'80px'} variant="simple" size="sm" w="100%">
      <Tbody>
        <Tr>
          <Td border="1px solid black" p="1" textAlign="right">
            {result ? result.sum_sapling_inward : '0'}
          </Td>
        </Tr>
        <Tr>
          <Td border="1px solid black" p="1" textAlign="right">
            {result ? '0' + result.sum_sapling_outward : '-0'}
          </Td>
        </Tr>
        <Tr>
          <Td bgColor={first?'#cefc84':'yellow'} border="1px solid black" p="1" textAlign="right">
            {result ? result.sum_sapling_inward - result.sum_sapling_outward : '0'}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default TdData;
