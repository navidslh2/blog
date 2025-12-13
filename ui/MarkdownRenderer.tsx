import ReactMarkdown from "react-markdown"

interface Props {
    content:string
}

const MarkdownRenderer = ({content}:Props) => {
  return (
    <ReactMarkdown>
        {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer
