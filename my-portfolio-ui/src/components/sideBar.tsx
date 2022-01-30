import { connect } from 'react-redux';
import { IAppState } from '../models/state/IAppState';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import * as sideBarActions from "../actions/SideBarActions";



export const SideBarComponent = (props: {
    collapsed: any,
    toggled: any,
    handleToggleSideBar: any
}) => {
    return (
        <ProSidebar
            collapsed={props.collapsed}
            toggled={props.toggled}
            breakPoint="md"
            onToggle={props.handleToggleSideBar}
        >
            <Menu iconShape="square">
                <MenuItem>Current Card</MenuItem>
                <MenuItem>Contact Info</MenuItem>
                <MenuItem>Resume</MenuItem>
            </Menu>
        </ProSidebar>
    )
}

const mapStateToProps = (state: IAppState) => ({
    toggled: state.sideBar.toggled,
    collapsed: state.sideBar.collapsed
})

const mapDispatchToProps = {
    handleToggledSideBar: sideBarActions.handleToggleSideBar
}

export const SideBarComponentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideBarComponent)