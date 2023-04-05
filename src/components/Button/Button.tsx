import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { CircularLoader } from '@/components/Loaders/CircularLoader/CircularLoader';

type ButtonSize = 'small' | 'medium' | 'large';
type Variants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'action'
  | 'oauth'
  | 'success'
  | 'error';

export type ButtonProps = {
  /**
   * end icon
   */
  endIcon?: React.ReactNode;
  /**
   * Should the button span full width
   */
  fullWidth?: boolean;
  /**
   * Button contents
   */
  label?: string;
  /**
   * loading state
   */
  loading?: boolean;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * should icons have solid icon
   */
  solidIcon?: boolean;
  /**
   * start icon
   */
  startIcon?: React.ReactNode;
  /**
   * form submit button
   */
  submitButton?: boolean;
  /**
   * Button type
   */
  variant?: Variants;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'css'>;

type StyledIconButtonType = Pick<ButtonProps, 'variant' | 'size' | 'disabled'>;

type StyledButtonProps = Pick<
  ButtonProps,
  'variant' | 'disabled' | 'fullWidth' | 'size'
>;

type LoaderContainerType = Pick<ButtonProps, 'disabled'> & StyledIconButtonType;

const ButtonLabelContainer = styled.span<StyledIconButtonType>`
  ${tw`flex items-center w-full`}
  justify-content : ${(props) =>
    props.variant === 'oauth' ? 'flex-start' : 'center'};
  ${(props) => (props.variant === 'oauth' ? tw`ml-2` : tw`ml-0`)};
`;

const ButtonLabel = styled.span`
  font-size: inherit;
  font-family: inherit;
`;

const ButtonIcon = styled.span<StyledIconButtonType>`
  & svg,
  & img {
    display: block;
    width: ${({ size }) =>
      size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px'};
    height: ${({ size }) =>
      size === 'small' ? '12px' : size === 'medium' ? '16px' : '24px'};
  }
`;

const ButtonStartIcon = styled(ButtonIcon)<StyledIconButtonType>`
  ${tw`flex-none`}
  margin-left: ${(props) =>
    props.size === 'small' || props.variant === 'oauth' ? '0px' : '-4px'};
  margin-right: ${(props) => (props.size === 'small' ? '0.3rem' : '0.5rem')};
`;

const ButtonEndIcon = styled(ButtonIcon)<StyledIconButtonType>`
  margin-right: ${(props) => (props.size === 'small' ? '-2px' : '-4px')};
  margin-left: 0.5rem;
`;

const LoaderContainer = styled.span<LoaderContainerType>`
  ${tw`mr-2.5`}
  & svg {
    ${({ size }) => size === 'small' && tw`w-4 h-4`}
    ${({ size }) => size === 'large' && tw`w-6 h-6`}
  }
  & .loader-track {
    fill: hsl(0deg 0% 17% / 0.5);
  }
  & .loader-segment {
    fill: hsl(0deg 0% 17%);
  }
  & mask.loader-segment {
    fill: hsl(0deg 0% 50%);
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${tw`flex items-center focus-visible:outline-none focus-visible:ring-2 ring-emerald-900 disabled:cursor-not-allowed transition-colors duration-150 ease-out`}
  ${({ fullWidth }) => fullWidth && tw`w-full`}

  ${({ variant }) => variant !== 'primary' && tw`transition-colors ease-in`}

  ${({ size }) => (size === 'large' ? tw`rounded-lg` : tw`rounded`)}
  ${({ size }) => (size === 'large' || size === 'medium') && tw`px-4 py-2`}
  ${({ size }) => size === 'small' && tw`px-2 py-1`}

  // font variation
  ${({ size }) => size === 'large' && tw`headline-small-bold`}
  ${({ size }) => size === 'medium' && tw`body-xs-bold`}
  ${({ size }) => size === 'small' && tw`body-xs`}

  // primary general styling
  ${({ variant }) => variant === 'primary' && tw`text-white`}
  ${({ variant, disabled }) =>
    variant === 'primary' &&
    !disabled &&
    tw`bg-emerald-900 hover:bg-emerald-800 focus-visible:bg-emerald-900 active:bg-emerald-900`}

  // primary styling
  ${({ variant, disabled }) =>
    variant === 'primary' && disabled && tw`bg-gray-300`}

  // secondary styling
  ${({ variant }) => variant === 'secondary' && tw`border`}
  ${({ variant, disabled }) =>
    variant === 'secondary' &&
    (!disabled
      ? tw`border-gray-900 border text-gray-900 focus-visible:border-gray-200 hover:bg-gray-200 focus-visible:bg-gray-200 active:bg-gray-300`
      : tw`border-gray-300 text-gray-400`)}

  // action styling
  ${({ variant }) => variant === 'action' && tw`border`}
  ${({ variant, disabled }) =>
    variant === 'action' &&
    (!disabled
      ? tw`border-gray-300 border bg-white text-gray-900 focus-visible:border-gray-200 hover:border-gray-300 hover:bg-gray-100 focus-visible:bg-gray-200 active:bg-gray-300`
      : tw`border-gray-300 text-gray-400`)}

  // tertiary styling
  ${({ variant, size }) =>
    variant === 'tertiary' &&
    size === 'small' &&
    tw`text-emerald-900 underline hover:text-gray-900 disabled:text-gray-300`}
  ${({ variant, size }) =>
    variant === 'tertiary' &&
    (size === 'medium' || size === 'large') &&
    tw`text-emerald-900 no-underline hover:bg-emerald-100 active:bg-white active:border active:border-emerald-900 disabled:no-underline disabled:text-gray-300`}

  // oauth
  ${({ variant }) =>
    variant === 'oauth' &&
    tw`body-normal-bold border border-gray-700 text-gray-700`}

  // success variant styling
  ${({ variant, disabled }) =>
    variant === 'success' &&
    (!disabled
      ? tw`border-green-300 border bg-green-100 text-secondary-green-900 hover:border-green-500 hover:bg-green-300 focus-visible:bg-green-300 focus-visible:border-green-500`
      : tw`border-green-100 border bg-green-100 text-green-500`)}

  // error variant styling
  ${({ variant, disabled }) =>
    variant === 'error' &&
    (!disabled
      ? tw`border-red-300 border bg-red-100 text-red-900 hover:border-red-500 hover:bg-red-300 focus-visible:bg-red-300 focus-visible:border-red-500`
      : tw`border-red-100 border bg-red-100 text-red-500`)}

  svg {
    ${({ disabled }) => disabled && tw`fill-current text-gray-400`}
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      variant = 'secondary',
      loading,
      disabled = false,
      fullWidth = false,
      startIcon = null,
      endIcon = null,
      label,
      children,
      submitButton,
      ...props
    },
    ref
  ) => {
    const buttonLabel = children ?? label;

    return (
      <StyledButton
        ref={ref}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled || loading}
        {...(submitButton ? { type: 'submit' } : { type: 'button' })}
        {...props}
      >
        {startIcon && (
          <ButtonStartIcon
            data-start-icon-container
            size={size}
            variant={variant}
            disabled={disabled}
          >
            {startIcon}
          </ButtonStartIcon>
        )}
        <ButtonLabelContainer
          data-label-container
          variant={variant}
          size={size}
        >
          {loading && (
            <LoaderContainer
              data-loading-container
              size={size}
              variant={variant}
              disabled={disabled}
              role='progressbar'
            >
              <CircularLoader />
            </LoaderContainer>
          )}
          <ButtonLabel data-label>{buttonLabel}</ButtonLabel>
        </ButtonLabelContainer>
        {endIcon && (
          <ButtonEndIcon
            data-end-icon-container
            size={size}
            variant={variant}
            disabled={disabled}
          >
            {endIcon}
          </ButtonEndIcon>
        )}
      </StyledButton>
    );
  }
);
