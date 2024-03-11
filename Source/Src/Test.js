import React from 'react';
import { WebView } from 'react-native-webview';

const Test = () => {
  return (
    <WebView source={{ uri: 'https://calendar.google.com/calendar/u/0/r/eventedit?dates=20241010/20241012&text=TransportNext+Awards,+Conference+%26+Expo&details=Join+us+for+an+insightful+conference+where+industry+experts+will+share+their+knowledge+on+the+latest+trends+and+developments+in+the+field.+Network+with+professionals,+participate+in+engaging+discussions,+and+gain+valuable+insights+to+enhance+your+expertise.+Don%27t+miss+this+opportunity+to+connect+with+peers+and+expand+your+knowledge+base.+We+look+forward+to+seeing+you+there!' }} style={{ flex: 1 }} />
  );
}

export default Test;
