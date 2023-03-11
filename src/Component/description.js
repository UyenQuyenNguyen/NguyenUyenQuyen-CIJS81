import styled from "@emotion/styled";

const TextArea = styled.textarea`
    min-width: 40rem;
    height: 200px;
    border: none;
    border-radius: 8px;
    padding: 12px 14px;
    outline: none;
    box-sizing: border-box;
`

const DescriptionDiv = styled.div`
      text-align: left;
`

const Description = () => {
    return (
        <DescriptionDiv>
            <p>Description</p>
            <TextArea placeholder="Description of you event.."></TextArea>
        </DescriptionDiv>
    )
}

export default Description;