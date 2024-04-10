import { Placement } from '@/interfaces/deck'
import formatPlacement from '@/services/formatPlacement'

interface PlacementCellProps {
  placement: Placement
}

export default function PlacementCell({ placement }: PlacementCellProps) {
  return <td>{formatPlacement(placement)}</td>
}
