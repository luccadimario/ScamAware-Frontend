import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { mailProps } from './MailFetch';
import axios from 'axios'
interface RowProps extends ListChildComponentProps {
  changeHandler: (mailID: string | null) => void;
  loadedMailProp: mailProps;

}
function renderRow(props: RowProps) {
  const { index, style} = props;
  //const [mailID, setMailID] = useState<string | null>(null);
  //const [classNameString, setClassNameString] = useState<string | undefined>()
  //const [primaryString, setPrimaryString] = useState<string | undefined>()
  //const [secondaryString, setSecondaryString] = useState<string | undefined>()
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    // fix and use useState may have to asynchronously apply.
    props.changeHandler(props.loadedMailProp.id);
  };
  let classNameString: string | undefined = "";
  let primaryString: string | undefined = "";
  let secondaryString: string | undefined = "";
  if(index % 3 == 0) {
    //setClassNameString("bg-yellow-600")
    //setSecondaryString("POSSIBLE SCAM ALERT");
    classNameString = "bg-yellow-600";
    primaryString = props.loadedMailProp.subject;
    secondaryString = "POSSIBLE SCAM ALERT";
  }
  else {
    //setClassNameString("bg-gray-100");
    //setPrimaryString(props.loadedMailProp.subject);
    //setSecondaryString(props.loadedMailProp.snippet);
    classNameString = "bg-gray-100";
    primaryString = props.loadedMailProp.subject;
    secondaryString = props.loadedMailProp.snippet;
  }

  return (
    <>
    <ListItem className={classNameString} style={style} key={index} component="div" disablePadding>
      <ListItemButton component="button" className="h-full" onClick={handleClick}>
        <ListItemText style={{ color: '#313131' }} primary={primaryString} secondary={secondaryString}/>
      </ListItemButton>
    </ListItem>
    </>
  );
}

export default function VirtualizedList(props: {changeHandler: (mailID: string | null)=>void}) {
  useEffect(() => {
    populateList();
}, []);
  const [messages, setMessages] = useState<mailProps[]>([]);
  async function populateList() { // Will probably be a useEffect clause
    //const response = await fetch("/live");
    //console.log(response);
    axios
    .get("https://localhost:3001/live")
    .then(function (response: any) {
    console.log(response);
    });
    let mailProps1: mailProps = {
      id: "12345",
      to: "string",
      from: "string",
      subject: "string",
      snippet: "string"
    }
    let mailProps2: mailProps = {
      id: "54321",
      to: "string2",
      from: "string2",
      subject: "string2",
      snippet: "string2"
    }
    setMessages([mailProps1, mailProps2]);
  }
  return (
    <div className="h-full">
      <FixedSizeList
        height={screen.height}
        width={screen.width/3.4}
        itemSize={100}
        itemCount={messages.length}
        overscanCount={5}
        className="scrollbar-hide h-full"
      >
        {(listProps) => renderRow({ ...listProps, changeHandler: props.changeHandler, loadedMailProp: messages[listProps.index] })}
      </FixedSizeList>
    </div>
  );
}