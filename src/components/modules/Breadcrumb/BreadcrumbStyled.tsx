import Link from "next/link";
import styled from "styled-components";

export const BreadcrumbContainer = styled.nav`
  gap: 8px;
  width: 100%;
  display: flex;
  max-width: 45%;
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1500px) {
    max-width: 46.3%;
  }

  @media (max-width: 1173px) {
    max-width: 100%;
    padding: 12px 0px;
    justify-content: flex-start;
  }
`;

export const BackButton = styled(Link)`
  gap: 8px;
  display: flex;
  color: #596573;
  align-items: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
`;

export const BreadcrumbList = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const BreadcrumbItem = styled(Link)`
  color: #8c95a1;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
`;

export const Separator = styled.span`
  color: #8c95a1;
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;
`;

export const CurrentPage = styled.span`
  margin-left: 8px;
  max-width: 360px;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.color.brand.dark};
  font-size: ${({ theme }) => theme.typography.fontSizeMedium}rem;

  @media (max-width: 1173px) {
    max-width: 50%;
  }
`;
