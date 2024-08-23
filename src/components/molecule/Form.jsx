export const Form = ({onSubmit, className, children}) => {
  return <form className={className} onSubmit={onSubmit}>{children}</form>
}