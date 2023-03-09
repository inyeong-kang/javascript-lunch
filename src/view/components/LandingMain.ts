import { useRestaurants } from '../../utils/hooks/useRestaurants';
import { Tab } from './Tab';
import { Nav } from './Nav';
import { RestaurantList } from './RestaurantList';
import { OftenRestaurants } from './OftenRestaurants';
import { useBoolean } from '../../utils/hooks/useBoolean';

function LandingMain() {
  const {
    values: { restaurants, category, sortOption },
    handlers: { handleCategory, handleSortOption, handleClickName },
  } = useRestaurants();

  const [isOften, often, all] = useBoolean(false);

  return `
    <main>
      ${Tab({ often })}
      ${Nav({ category, sortOption, handleCategory, handleSortOption })}
      ${isOften ? OftenRestaurants({ all }) : RestaurantList({ restaurants })}
    </main>
  `;
}

export { LandingMain };
