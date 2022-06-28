import useCounter from '../hooks/useCounter'

interface MetricItemProps {
  max: number
  point: string
  nomal: string
}

const MetricItem = ({ max, point, nomal }: MetricItemProps) => {
  const count = useCounter(max)

  return (
    <div>
      <strong>
        <span>{count}</span>
        {point}
      </strong>
      {nomal}
    </div>
  )
}

export default MetricItem
