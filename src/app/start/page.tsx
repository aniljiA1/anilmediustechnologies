import Card from '../../components/Card'

export default function StartPage() {
  return (
    <div className="p-8 flex flex-wrap justify-center">
      <Card title="Get Started" description="This is the start page card." />
      <Card title="Step 2" description="Follow the instructions to continue." />
      <Card title="Step 3" description="Complete your setup easily." />
    </div>
  )
}
