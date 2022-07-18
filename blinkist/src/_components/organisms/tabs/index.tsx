import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';

interface TabProps {
    title1: string;
    title2: string;
    title3: string;
    content1: [];
    content2: [];
    content3: [];
}

const Tabs = (props: TabProps) => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
        <Box>
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label={props.title1} value="1" />
                <Tab label={props.title2} value="2" />
                <Tab label={props.title3} value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{props.content1}</TabPanel>
            <TabPanel value="2">{props.content2}</TabPanel>
            <TabPanel value="3">{props.content3}</TabPanel>
          </TabContext>
        </Box>
      );
};

export default Tabs;