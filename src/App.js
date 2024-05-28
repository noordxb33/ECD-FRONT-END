import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RouteComponent from './RouteComponent';
import Gender from './Pages/Acessories/Gender';
import Add_Addmission from './Pages/Admission/Add_Addmission';
import Year from './Pages/Acessories/Year';
import axios from 'axios';
import {APIADD} from './APIADD';
import toast,{Toaster} from 'react-hot-toast';
import MotherQualification from './Pages/Acessories/MotherQualification';
function App(props) {

    //Creating A default Request For Log In
    const ApiEndPoint = axios.create({
      baseURL: APIADD,
      timeout: 10000,
      headers: {
        "Accept": "application/json",
      },
    });
  
    const Get = async (address,setter) => {
      await ApiEndPoint.get(address)
        .then(response => {
          if(response.status==200){
            toast.success(
            'Data was retrieved successfully',
            {
              duration: 10000,
              position: 'top-center',
            }
            )
          }
          setter(response.data)
          return response;
        })
        .catch(function (error) {
          return error
  
        })
        .then(function () {
          // always executed
        });
    }
    const postRequest =async(add,data)=>{
      await ApiEndPoint.post(add, data)
      .then(function (response) {
        if(response.status==200){
          toast.success('Year Successfully Posted',
          {
            duration: 10000,
            position: 'top-center',
          }
          );

        }
      })
      .catch(function (error) {
        toast.error( `${error}`)
      })
      .then(function () {
        // always executed
      });
  }
  
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<RouteComponent Component={<>HomePage</>}/>} exact />
    <Route path="/Add-Admission" element={<RouteComponent Component={<Add_Addmission/>}/>} exact />
    <Route path="/List-Admission" element={<RouteComponent Component={<>HomePage</>}/>} exact />
    <Route path="/Gender" element={<RouteComponent Component={<Gender/>}/>}  />
    <Route path="/Year" element={<RouteComponent Component={<Year getRequest={Get} postRequest={postRequest} />}/>}  />
    <Route path="/MotherQualification" element={<RouteComponent Component={<MotherQualification getRequest={Get} postRequest={postRequest} />}/>}  />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
