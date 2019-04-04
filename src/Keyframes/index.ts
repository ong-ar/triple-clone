import { keyframes } from "styled-components";

export const FadeIn = (startX: number = 0, startY: number = 0) => {
  return keyframes` 
    from {
      opacity: 0;
      transform: translateX(${startX}%) translateY(${startY}%);
    }

    to {
      opacity: 1;
      transform: translateX(0%) translateY(0%);
    }
  `;
};
