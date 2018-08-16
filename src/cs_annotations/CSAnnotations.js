import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './CSAnnotations.css'
import OpResearch from './tabs/OpReasearch'
import VisualComputing from './tabs/VisualComputing'

class CSAnnotations extends Component {
    render() {
        return (
            <div id="cs-ann-main">
                <Tabs>
                    <div id="header">
                        <h1>Computer Science Annotations</h1>
                        <nav id="menu">
                            <TabList >
                                <Tab>Operational Research</Tab> |
                                <Tab>Visual Computing</Tab>
                            </TabList>
                        </nav>
                    </div>
                    <TabPanel><OpResearch /></TabPanel>
                    <TabPanel><VisualComputing /></TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default CSAnnotations;