
import { FormEvent, useCallback, useState } from "react";
import AlertCustom from '../../shared/components/Alert';
import { ErrorDetail } from "../../shared/components/Alert/interface";
import InfoUser from "../../shared/components/InfoUser";
import SearchUser from "../../shared/components/SearchUser";
import FormContext from '../../shared/contexts/form';
import { useI18n } from "../../shared/i18n";
import { getUser } from "../../shared/services/controllers/getUser";
import { User } from "../../shared/services/controllers/getUser/interface";
import { UserForm } from "./interface";
import * as Styled from './styles';

const UsersPage: React.FC = () => {
  const {translate} = useI18n();
  const [userForm, setUserForm] = useState<UserForm>({ searchUser: '' });
  const [user, setUser] = useState<User>();
  const [showLoading, setShowLoading] = useState(false);
  const [erroDetail, setErrorDetail] = useState<ErrorDetail>({
    message: '',
    open: false
  })

  const handleClose = useCallback((event?: React.SyntheticEvent | Event, reason?: string) => {
    setErrorDetail({message:'', open:false});
  },[]);

  const showInfoUser = useCallback(() => {

    if (showLoading) {
      return (<Styled.LoadingIcon />)
    }
    else if (user) {
      return (<InfoUser user={user} />)
    }
    else {
      return (<></>)
    }
  }, [showLoading, user])

  const showError = useCallback((message: string) => {
    setErrorDetail({ open: true, message });
    setShowLoading(false);
  },[])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setShowLoading(true);
    const { searchUser } = userForm;

    if(!searchUser){
      showError(translate('NOMEEMBRANCO'));
      return;
    }

    try {
      getUser(searchUser)
        .subscribe(user => {
          setShowLoading(false);
          setUser(user)
        },
          error => {
            showError(error.response.data);
          });

    } catch (error) {
      console.log(error);
    }
  }, [userForm])

  return (
    <Styled.Container>
      <FormContext.Provider value={{
        formState: userForm,
        setFormState: setUserForm,
      }}
      >
        <Styled.FormWrapper onSubmit={handleSubmit} >
          <SearchUser />
        </Styled.FormWrapper>
      </FormContext.Provider>
      <div>
        {showInfoUser()}
      </div>

      <AlertCustom message={erroDetail?.message} open={erroDetail?.open} severity="error" handleClose={handleClose} />
    </Styled.Container>

  )
}


export default UsersPage