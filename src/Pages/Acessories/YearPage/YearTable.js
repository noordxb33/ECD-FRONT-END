import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import { forwardRef } from 'react';
import { Avatar } from "@mui/material";
import { withRouter } from 'react-router-dom'
import ViewColumn from '@material-ui/icons/ViewColumn';
import { BorderOuterRounded, CenterFocusStrongRounded, Sync } from '@material-ui/icons';
import { AccountBoxRounded,GroupAddRounded} from '@material-ui/icons';
import { width } from "@mui/system";
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Detail: forwardRef((props, ref) => <CenterFocusStrongRounded {...props} ref={ref} />),
  QrCode: forwardRef((props, ref) => <BorderOuterRounded {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  AddContract: forwardRef((props, ref) => <GroupAddRounded {...props} ref={ref} />),
  ViewContract: forwardRef((props, ref) => <AccountBoxRounded {...props} ref={ref} />)
};





export default function YearTable(props) {
  const [columns, setColumns] = useState([
    {
      title: "BPL#",
      field: 'BPL',
      headerStyle: {
        backgroundColor: 'var(--background)',
        fontSize: '15px',
        boxShadow: '0 0 20px var(--spread) var(--text-primary)',
        color: 'var(--text-primary)'
      }

    },
    {
      title: "Scope ID",
      field: 'ScopeHouseHoldID',
      headerStyle: {
        backgroundColor: 'var(--background)',
        fontSize: '15px',
        boxShadow: '0 0 20px var(--spread) var(--text-primary)',
        color: 'var(--text-primary)'
      }

    },
   
    

  ]);

  return (
<MaterialTable
icons={tableIcons}
title="Inserted Years"
columns={columns}


style={{
  padding: '1%',
  marginTop:'1%',
  // backgroundColor: 'var(--bg-color)',

  borderRadius: '10px',
  fontSize: '12px',

  color: 'var(--desc-color)'
}}


options={{
  exportAllData:true,
  exportButton:true,
  headerStyle: {
    // backgroundColor: 'var(--bg-color)',
    fontSize: '14px',
    boxShadow: 5,
    color: 'var(--desc-color)'
  },
  filtering:true,
  columnsButton:true,
  searchFieldAlignment:'left',
}}
detailPanel={
  [
    {
      icon:tableIcons.Edit,
      openIcon:tableIcons.Add,
      tooltip:'add something',
      render:rowData=>{
        return (
          <div>{rowData.id}</div>
        )
      }
    }
  ]
}
elevation={6}
data={[]}
// components={{
//   Toolbar:(props)=>(
//     <div className="row">
//       <div className="col-12 ">
//       <MTableToolbar  {...props}/>

//       </div>
//       </div>
//   )
// }}
// editable={{
//   // onRowAdd: (newData) =>
//   //   new Promise((resolve, reject) => {
//   //     setTimeout(() => {
//   //       setProducts([...products, newData]);

//   //       resolve();
//   //     }, 1000);
//   //   }),
//   onRowUpdate: (newData, oldData) =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // const dataUpdate = [...products];
//         // const index = oldData.tableData.id;
//         // dataUpdate[index] = newData;
//         // setProducts([...dataUpdate]);
//         handleOpenModal();
//         resolve();
//       }, 1000);
//     }),
//           }}

actions={[
  {
    icon: tableIcons.ViewContract,
    tooltip: 'Print ID Card',
    headerStyle: { backgroundColor: 'var(--bg-color)' },
    onClick: (event, rowData) => {
      // const contracts=Object.assign({},students.contracts);


      // handleOpenModal(rowData.contracts, rowData.contracts.Em_Name);
    }

  }
]}

/>

  )
}


  