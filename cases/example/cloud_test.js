import account from '../../steps/account';
import viewer from '../../steps/viewer';


// пример теста
describe('test id', () => {
	before(() => {
		account.auth();
		viewer.openCloud();
	});

	it('Проверка добавления в избранное', () => {
		viewer.checkFavourite();
	});

	it('Проверка открытия нижнего бара', () => {
		viewer.expandDownBar();
	});
});
