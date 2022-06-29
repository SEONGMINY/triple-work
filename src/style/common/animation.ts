import { css, keyframes } from 'styled-components'

interface Animation {
  animation: 'fadeIn'
  delay: number
}

export const ANIMATIONS = {
  fadeIn: keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
 `,
}

export const ANIMATION = ({ animation, delay }: Animation) => css`
  animation-name: ${ANIMATIONS[animation]};
  animation-duration: 700ms;
  animation-delay: ${delay}ms;
  animation-fill-mode: foward;
`

export const ANIMATION_STYLES = {
  fadeIn: (delay: number) => ANIMATION({ animation: 'fadeIn', delay }),
}
