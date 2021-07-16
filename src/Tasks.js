import React from 'react'
import styled from 'styled-components';

const Wrap = styled.div`
display: flex;
flex: 1;
flex-direction: column;
align-items: center;
height: 100%;
`

const FormWrap = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 20vh;
width: 100%;
`

const FormSubmit = styled.button`
margin-top: 3px;
align-self: center;
align-items: center;
justify-content: center;
height: 3vh;
width: 30.5%;
`

const FormInput = styled.input`
align-self: center;
align-items: center;
justify-content: center;
height: 3vh;
width: 30%;
`

const WeekBlock = styled.div`
height: 20vh;
width: 30%;
background: grey;
display: flex;
flex: 1
`

const WeekWrap = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const Header = styled.h1`

`


const Tasks = () => {


    return (
        <Wrap>
            <Header>Add task</Header>
            <FormWrap>
                <FormInput placeholder='title' />
                <FormInput placeholder='description' />
                <FormInput placeholder='time' />
                <FormSubmit>Submit</FormSubmit>
            </FormWrap>
            <WeekWrap>
                <WeekBlock>

                </WeekBlock>
                <WeekBlock>

                </WeekBlock>
                <WeekBlock>
                    
                </WeekBlock>
                <WeekBlock>
                    
                </WeekBlock>
                <WeekBlock>
                    
                </WeekBlock>

            </WeekWrap>

        </Wrap>
    )
}


export default Tasks