'use client'

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


export default function SideBarComponent(
    { 
        propIsCollasped 
    }: { 
        propIsCollasped: boolean
    }
) {
    return (
        <Sidebar
            collapsed={propIsCollasped}
            breakPoint="md"
            style={{width: "100%", height: "100%"}}
            id="sideBar"
        >
            <Menu>
                <MenuItem>Current Card</MenuItem>
                <MenuItem>Contact Info</MenuItem>
                <MenuItem>Resume</MenuItem>
            </Menu>
        </Sidebar>
    );
}