'use client';
import Image from 'next/image';
import { Title } from '@/components/ui/text';
import SubscriptionForm from '@/app/shared/subscription-form';
import { PiPlusBold } from 'react-icons/pi';
import ComingSoonImg from '@public/coming-soon.png';
import ComingSoonTwoImg from '@public/coming-soon-2.png';
import CountdownTimer from '../(other-pages)/coming-soon/countdown-timer';
// import logonew from '../../public/shikshyalogo.svg';
import logo from '../../../public/shikshyalogo.svg';
import SocialItems from '@/components/ui/social-shares';
import { Link } from 'react-scroll';

import cn from '@/utils/class-names';
import { siteConfig } from '@/config/site.config';
import { routes } from '@/config/routes';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const notIn = true;
  return (
    <>
      <div className="flex flex-col bg-[#F8FAFC] dark:bg-gray-50">
        {/* sticky top header  */}
        <div className="sticky top-0 z-40 px-6 py-5 backdrop-blur-lg lg:backdrop-blur-none xl:px-10 xl:py-8">
          <div
            className={cn(
              'mx-auto flex max-w-[1520px] items-center',
              notIn ? 'justify-between' : 'justify-center'
            )}
          >
            <Link href={'/'}>
              <Image
                src={logo}
                alt={siteConfig.title}
                className="dark:invert"
                priority
                width={155}
                height={28}
              />
            </Link>
            {/* {notIn && (
              <Button
                variant="outline"
                size="sm"
                className="md:h-10 md:px-4 md:text-base"
              >
                Go to home
              </Button>
            )} */}
          </div>
        </div>
      </div>
      <div className="relative flex grow flex-col-reverse items-center justify-center gap-y-5 px-6 pt-10 lg:flex-row lg:pt-0 xl:px-10">
        <div className="z-10 mx-auto w-full max-w-[1536px] text-center lg:text-start">
          <Title
            as="h1"
            className="mb-3 text-2xl font-bold text-gray-1000 md:mb-5 md:text-3xl md:leading-snug xl:text-4xl xl:leading-normal 2xl:text-5xl 2xl:leading-normal"
          >
            Our website is developing. Keep{' '}
            <br className="hidden sm:inline-block" /> patience, we are coming
            soon
          </Title>
          <p className="mb-6 text-sm leading-loose text-gray-500 md:mb-8 xl:mb-10 xl:text-base xl:leading-loose">
            We have been spending long hours in order to launch our new website.
            Join our <br className="hidden sm:inline-block" /> mailing list or
            follow us on Facebook for get latest update.
          </p>
          <div className="flex justify-center lg:justify-start">
            <CountdownTimer />
          </div>
          <p className="mb-4 mt-8 text-sm font-semibold leading-normal text-gray-800 md:mt-10 xl:mb-6 xl:mt-12 xl:text-base">
            Don’t want to miss update? Subscribe now
          </p>
          <SubscriptionForm />
        </div>

        <Image
          src={ComingSoonTwoImg}
          alt="coming soon"
          className="fixed start-0 top-0 hidden w-28 dark:invert 3xl:inline-block 3xl:w-32 rtl:rotate-90"
        />
        <div className="end-10 top-1/2 lg:absolute lg:-translate-y-1/2 xl:end-[10%] 3xl:end-[15%]">
          <Image
            src={ComingSoonImg}
            alt="coming-soon"
            className="aspect-[531/721] max-w-[194px] md:max-w-[256px] lg:max-w-sm xl:max-w-[400px] 3xl:max-w-[531px]"
          />
        </div>
        <PLusIconPatterns />
      </div>
      <SocialItems />
    </>
  );
}

function PLusIconPatterns() {
  return (
    <>
      <PiPlusBold className="absolute end-5 top-5 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-5 end-3 hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[20%] top-5 hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[7%] top-1/3 hidden rotate-45 animate-popup text-gray-1000 [--popup-delay:100ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-[10%] end-[10%] hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:150ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[20%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:300ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[40%] top-[20%] hidden animate-popup text-gray-1000 [--popup-delay:400ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[48%] top-10 hidden animate-popup text-[10px] text-gray-1000 [--popup-delay:500ms] lg:inline-block" />
      <PiPlusBold className="absolute end-[40%] top-1/2 hidden rotate-45 animate-popup text-xl text-gray-1000 [--popup-delay:250ms] lg:inline-block" />
      <PiPlusBold className="absolute bottom-10 end-[38%] hidden animate-popup text-gray-1000 [--popup-delay:200ms] lg:inline-block" />
    </>
  );
}

// import SignInForm from './sign-in-form';
// import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
// import Image from 'next/image';
// import UnderlineShape from '@/components/shape/underline';
// import { metaObject } from '@/config/site.config';

// export const metadata = {
//   ...metaObject('Sign In'),
// };

// export default function SignIn() {
//   return (
//     <AuthWrapperOne
//       title={
//         <>
//           Welcome back! Please{' '}
//           <span className="relative inline-block">
//             Sign in to
//             <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
//           </span>{' '}
//           continue.
//         </>
//       }
//       description="By signing up, you will gain access to exclusive content, special
//       offers, and be the first to hear about exciting news and updates."
//       bannerTitle="The simplest way to manage your workspace."
//       bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//       amet sint velit officia consequat duis."
//       isSocialLoginActive={true}
//       pageImage={
//         <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
//           <Image
//             src={
//               'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
//             }
//             alt="Sign Up Thumbnail"
//             fill
//             priority
//             sizes="(max-width: 768px) 100vw"
//             className="object-cover"
//           />
//         </div>
//       }
//     >
//       <SignInForm />
//     </AuthWrapperOne>
//   );
// }
