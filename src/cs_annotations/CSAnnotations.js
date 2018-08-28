import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './CSAnnotations.css'
import OpResearch from './tabs/OpReasearch'
import VisualComputing from './tabs/VisualComputing'
import FinancialCosts from "./tabs/FinancialCosts";

class CSAnnotations extends Component {
    render() {
        return (
            <div id="cs-ann-main">
                <Tabs>
                    <div id="header">
                        <h1>Computer Science Lecture Notes</h1>
                        <nav id="menu">
                            <TabList >
                                <Tab>Operational Research</Tab> |
                                <Tab>Visual Computing</Tab> |
                                <Tab>Financial Costs</Tab>
                            </TabList>
                        </nav>
                    </div>
                    <TabPanel><OpResearch /></TabPanel>
                    <TabPanel><VisualComputing /></TabPanel>
                    <TabPanel><FinancialCosts /></TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default CSAnnotations;