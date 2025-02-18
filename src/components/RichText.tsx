const RichText = ({
  className,
  content,
}: {
  className: string
  content: string
}) => {
  const richTextContent = { __html: content }
  return (
    <>
      <div className={className} dangerouslySetInnerHTML={richTextContent} />
    </>
  )
}

export default RichText
