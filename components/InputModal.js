import React from 'react'
import { Modal, Text } from 'react-native';
import { ModalButton,ModalContainer,ModalView,StyledInput,ModalAction,ModalActionGroup,ModalIcon,HeaderTitle,colors} from '../styles/appStyles';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function InputModal({handleEdit, todoedit, setTodoedit, todos, handleAddTodo,modalVis,setModalVis,todoInputValue,setTodoInputValue}) {

    const handleCloseModal=()=>{
        setModalVis(false);
        setTodoInputValue("");
        setTodoedit(null);
    }
    const handleSubmit=()=>{
        if(!todoedit){
            handleAddTodo({
                title: todoInputValue,
                date: new Date().toUTCString(),
                key:`${(todos[todos.length-1] && parseInt(todos[todos.length-1].key)+1) || 1 }`
            });
            setTodoInputValue("");
        }else{
            handleEdit({
                title: todoInputValue,
                date: todoedit.date,
                key: todoedit.key,
            });
            setTodoInputValue("");
        }
    }
    
    return (
        <>
          <ModalButton onPress={()=>{setModalVis(true)}} >
              <AntDesign name='plus' size={29} color={colors.secondary} />
          </ModalButton>

          <Modal animationType="slide" transparent={true} visible={modalVis} onRequestClose={handleCloseModal} >
              <ModalContainer>
                <ModalView>  

                  <ModalIcon>
                      <Text style={{fontSize: 23,fontWeight: "bold",letterSpacing: 2,color:`${colors.tertiary}`}}>Docket Scheme</Text>
                      <AntDesign name='edit' size={30} color={colors.tertiary} />
                  </ModalIcon>

                  <StyledInput placeholder="Add a docket scheme" placeholderTextColor={colors.alternative} selectionColor={colors.secondary} autoFocus={true} onChangeText={(text) => setTodoInputValue(text)} value={todoInputValue} onSubmitEditing={handleSubmit} />
                  
                  <ModalActionGroup>
                      <ModalAction color={colors.tertiary} onPress={handleCloseModal}>
                          <AntDesign name="close" size={28} color={colors.primary} />
                      </ModalAction>
                      <ModalAction color={colors.tertiary} onPress={handleSubmit}>
                          <AntDesign name="check" size={28} color={colors.secondary} />
                      </ModalAction>
                  </ModalActionGroup>

                </ModalView>
              </ModalContainer>
          </Modal>

        </>
    );
}

export default InputModal;
