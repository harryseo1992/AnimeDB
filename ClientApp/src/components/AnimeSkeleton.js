import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function AnimeSkeleton() {
  return (
    <SkeletonTheme>
      <section>
        <article className='item'>
          <div className='item-img' style={{paddingBottom: 10}}>
            <Skeleton width={345} height={500}/>
          </div>
          <div className='item-title' style={{paddingBottom: 10}}>
            <Skeleton width={240} height={30}/>
          </div>
          <div className='item-info'>
            <Skeleton width={345} height={20} count={3} />
          </div>
        </article>
      </section>
    </SkeletonTheme>
  );
}