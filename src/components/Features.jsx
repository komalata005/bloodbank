import { BsEye, BsEmojiSmile } from "react-icons/bs";

const features = [
  {
    name: 'Mission',
    description:
      'Our mission is to create a streamlined and accessible platform that connects individuals in need of blood with timely and accurate information about blood availability. We aim to facilitate a quick and efficient process through which users can find the required blood types, quantities, and locations with just a few clicks.',
    href: '#',
    icon: BsEmojiSmile,
  },
  {
    name: 'Vision',
    description:
      'Our vision is to establish a reliable and centralized platform that becomes the go-to resource for anyone requiring blood during emergencies. We envision a future where individuals can rely on our service to quickly connect with available blood donors, fostering a sense of community and support in times of crisis. Through our platform, we strive to make a significant impact on emergency healthcare by providing critical information efficiently and effectively.',
    href: '#',
    icon: BsEye,
  },
  {
    name: 'Goal',
    description:
      'Our goal is to eliminate the challenges and uncertainties faced by individuals seeking blood in emergency situations. We aspire to provide a comprehensive and user-friendly solution that ensures people in urgent need can easily access vital information about available blood resources. By doing so, we aim to contribute to saving lives and reducing the burden of searching across various social media platforms.',
    href: '#',
    icon: BsEmojiSmile,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-[#0F2A47] sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        {/* <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay on top of customer support
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div> */}
        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col p-6 bg-white rounded-md">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-[#982C29]">
                    <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
