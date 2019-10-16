import React from 'react';
import * as ReactQuill from 'react-quill';

import { Container } from './styles';

class MyComponent extends React.Component {
    constructor(props) {   
      super(props)
      this.state = { text: "Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Diuretics paradis num copo Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. num tem leite então bota uma pinga aí cumpadi! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per Sapien in monti palavris qui num significa nadis i pareci latim.  Quem manda na minha terra sou euzis! Interagi no mé, cursus quis, vehicula ac nisi. Viva Forevis aptent taciti sociosqu ad litora torquent. é motivis de denguis. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é. " } // You can also pass a Quill Delta here
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(value) {
      this.setState({ text: value })
    }
  
    render() {
      return (
        <Container>
        <div className="editor_style">
        <ReactQuill theme="snow" value={this.state.text}
                    onChange={this.handleChange} />
        </div>                    
        </Container>
      )
    }
  }

  export default MyComponent;