import React, { useState, useEffect, useCallback } from "react";
import pluginId from "../../pluginId";
import styled from "styled-components";
import { BaseHeaderLayout } from "@strapi/design-system";
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system";
import { Typography } from "@strapi/design-system";
import axios from "axios";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

type RowProps = {
  name: string;
  description: string;
  html_url: string;
};

const HomePage = () => {
  const [rows, setRows] = useState<RowProps[] | []>([]);

  const ROW_COUNT = 3;
  const COL_COUNT = 9;

  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  const getRows = useCallback(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data));
  }, [rows]);

  useEffect(() => {
    getRows();
  }, [rows]);

  return (
    <Wrapper>
      <BaseHeaderLayout
        title="React Avançado Repositories"
        subtitle={<p>A list of our repositories in React Avançado course.</p>}
        as="h2"
      />

      <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
        <Thead>
          <Tr>
            {headers.map((header) => (
              <th key={header.name}>
                <Typography variant="sigma">{header.name}</Typography>
              </th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.length > 0 &&
            rows.map((row) => (
              <tr key={row?.name}>
                <Td>
                  <Typography textColor="neutral800">{row?.name}</Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {row?.description}
                  </Typography>
                </Td>
                <Td>
                  <Typography textColor="neutral800">
                    {row?.html_url}
                  </Typography>
                </Td>
              </tr>
            ))}
        </Tbody>
      </Table>
    </Wrapper>
  );
};

export default HomePage;
