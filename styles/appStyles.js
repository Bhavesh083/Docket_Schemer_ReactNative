import styled from "styled-components";
import Constants from "expo-constants";

// Colors
export const colors = {
  primary: "#332424",
  secondary: "#112855",
  tertiary: "#E6E6E6",
  alternative: "#999999",
};

const statusBarHeight = Constants.statusBarHeight;


export const Container = styled.SafeAreaView`
  background-color: #fff;
  padding: 20px; 
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight+statusBarHeight}px;
`;

export const Containertwo = styled.SafeAreaView`
  background-color: ${colors.secondary};
  padding:0px;
  flex: 1;
  justify-content:center;
  align-items:center;
`;

export const Alertbox = styled.View`
  width:90%;
  background-color: white;
  border-radius: 15px;
  border: 2px solid #333;
  flex-direction: row; 
  justify-content:space-between;
  align-items: flex-start; 
  padding:10px;
`;

export const ABtext = styled.Text`
  width: 90%;
  font-size:16px;
  padding-vertical:10px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
`;

export const HeaderTitle = styled.Text`
  font-size: 27px;
  font-weight: bold;
  color: ${colors.secondary};
  letter-spacing: 2px;
  border-bottom-width : 3px;
  border-bottom-color : #f2f2f2;
`;
export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  background-color: #f2f2f2;
  border-radius: 20px;
  width:40px;
  height:40px;
  color: ${colors.secondary};
  align-items:center;
  justify-content:center;
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: ${colors.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${colors.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${colors.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.alternative};
  text-align: right;
  text-transform: uppercase;
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal
export const ModalButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${colors.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.tertiary};
`;

export const ModalView = styled.View`
  background-color: ${colors.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  justify-content:center;
  flex-direction:row;
  margin-bottom: 30px;
`;