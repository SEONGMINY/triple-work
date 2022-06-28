interface MetricItemProps {
  point: string
  nomal: string
}

const MetricItem = ({ point, nomal }: MetricItemProps) => {
  return (
    <div>
      <strong>{point}</strong>
      {nomal}
    </div>
  )
}

export default MetricItem
