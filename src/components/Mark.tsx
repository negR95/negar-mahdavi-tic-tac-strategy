import type { Player } from "../types/game";
import { OIcon } from "./icons/OIcon";
import { XIcon } from "./icons/XIcon";

type MarkProps = {
  player: Player;
  className?: string;
};

export function Mark({ player, className = "" }: MarkProps) {
  if (player === "X") {
    return <XIcon className={className} />;
  }

  return <OIcon className={className} />;
}
