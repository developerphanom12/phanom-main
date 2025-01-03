import toast from 'react-hot-toast'
import { store } from '../../redux/store';



export const ToastSuccess =(e)=>{
    const state = store.getState();
    const theme = state.persistReducer.theme;
    toast.success(e,{
        style:{
            borderRadius: '10px',
            background: theme.bgColor,
            color: theme.secondaryTextColor,
        }
    })
} 

export const ToastError =(e)=>{
    const state = store.getState();
    const theme = state.persistReducer.theme;
    toast.error(e,{
        style:{
            borderRadius: '10px',
            background: theme.bgColor,
            color: theme.secondaryTextColor,
        }
    })
} 


