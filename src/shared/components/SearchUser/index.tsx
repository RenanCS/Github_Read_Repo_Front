import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useCallback, useContext, useState } from "react";
import FormContext from '../../contexts/form';
import { useI18n } from "../../i18n";
import { LanguageCode } from "../../i18n/interface";
import Box from "../Box";
import ButtonText from "../ButtonText";
import TextField from "../TextField";
import * as Styled from './styles';


const SearchUser: React.FC = () => {
  const { translate, changeLanguage } = useI18n();
  const { formState, setFormState } = useContext(FormContext);
  const [language, setLanguage] = useState<string>('pt-BR')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleLanguage = useCallback((event: SelectChangeEvent) => {
    var newLanguage = event.target.value;
    setLanguage(newLanguage);
    changeLanguage(newLanguage as keyof LanguageCode);
  }, [changeLanguage])

  return (
    <Box flexDirection='column'>
      <Styled.Container>
        <TextField onInput={handleChange} name='searchUser' label={translate("PROCURAR")} ></TextField>
        <ButtonText type="submit" title={translate("PROCURAR")} />
        <Select
          value={language}
          label={translate('LINGUAGENS',2)}
          onChange={(e) => handleLanguage(e)}
        >
          <MenuItem value='pt-BR'>Pt-Br</MenuItem>
          <MenuItem value='en'>En</MenuItem>
          <MenuItem value='fr'>Fr</MenuItem>
        </Select>
      </Styled.Container>
      <Styled.Line />
    </Box>

  )
}

export default SearchUser;
