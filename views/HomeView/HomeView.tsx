import { Navbar } from '@/components'
import { CustomHead, CustomView } from '@/containers'

const HomeView = ({ ...props }) => (
  <CustomView {...props}>
    <CustomHead title="Home" description="Pagina inicial" />
    <Navbar />
    <h1>Hola Mundo</h1>
  </CustomView>
)

export default HomeView