import './App.css'

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
  { id: 2, name: 'Assets under holding', value: '$119 trillion' },
  { id: 3, name: 'New users annually', value: '46,000' },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      
      <div className='grid grid-cols-4'>
        <div className='bg-red-100 md:bg-amber-100 col-span-1'>BOX 1</div>
        <div className='bg-red-200 md:bg-amber-200 col-span-1'>BOX 2</div>
        <div className='bg-red-300 md:bg-amber-300 col-span-1'>BOX 3</div>
        <div className='bg-red-400 md:bg-amber-400 col-span-1'>BOX 4</div>
        <div className='bg-red-500 md:bg-amber-500 col-span-1'>BOX 5</div>
      </div>
    </div>
  )
}

